import EventBus from './event-bus';
import { IBlock, IEventBus, TProps, TMeta } from './types';
import { nanoid } from 'nanoid';
import { TemplateDelegate } from 'handlebars';

export default class Block implements IBlock {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  protected _element: HTMLElement = document.createElement('div');

  private _meta: TMeta = <TMeta>{};

  public props: TProps = <TProps>{};

  public id = nanoid(6);

  public children: Record<string, Block>;

  private eventBus: () => IEventBus;

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */

  constructor(tagName = 'div', propsWithChildren: Record<string, TProps> = {}) {
    const eventBus = new EventBus();

    const { props, children } = this._getChildrenAndProps(propsWithChildren);
    this._meta = {
      tagName,
      props,
    };

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this.children = children;

    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(eventBus: IEventBus): void {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _getChildrenAndProps(childrenAndProps: Record<string, Block | any>) {
    const props: TProps = {};
    const children: Record<string, Block> = {};

    Object.entries(childrenAndProps).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { props, children };
  }

  protected compile(
    template: TemplateDelegate,
    context: Record<string, string>,
  ) {
    const contextAndStubs = { ...context };

    Object.entries(this.children).forEach(([name, component]) => {
      contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
    });
    const html = template(contextAndStubs);
    const temp = document.createElement('template');
    temp.innerHTML = html;
    Object.entries(this.children).forEach(([, component]) => {
      const stub = temp.content.querySelector(`[data-id="${component.id}"]`);
      if (!stub) {
        return;
      }
      component.getContent()?.append(...Array.from(stub.childNodes));
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      stub.replaceWith(component.getContent()!);
    });

    return temp.content;
  }

  private _addEvents(): void {
    const events = this.props.events ? this.props.events : {};
    const element = this.getElementForEvent();
    Object.keys(events).forEach((eventName) => {
      element.addEventListener(eventName, events[eventName]);
    });
  }

  public getElementForEvent(): HTMLElement {
    return this._element;
  }

  private _removeEvents(): void {
    const { events = {} } = this.props;
    const element = this.getElementForEvent();
    Object.keys(events).forEach((eventName) => {
      element.removeEventListener(eventName, events[eventName]);
    });
  }

  private _createResources(): void {
    if (this.props.wrapperClass) {
      this._element.classList.add(this.props.wrapperClass);
    }
    if (this.props.extraClass) {
      this._element.classList.add(this.props.extraClass);
    }
    if (this.props.dataset) {
      this._element.setAttribute('data-inputs', this.props.dataset);
    }
  }

  init(): void {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidMount(): void {
    this.componentDidMount();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  componentDidMount(): void {}

  private _componentDidUpdate(oldProps: TProps, newProps: TProps): void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public componentDidUpdate(oldProps: TProps, newProps: TProps): boolean {
    return true;
  }

  public setProps = (nextProps: TProps): void => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element(): HTMLElement {
    return this._element;
  }

  private _render() {
    const fragment = this.render();
    this._element = fragment.firstElementChild as HTMLElement;
    this._addEvents();
  }

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  public getWrapperElement(): HTMLElement {
    return this.element;
  }

  getContent() {
    return this.element;
  }

  private _makePropsProxy(props: TProps): TProps {
    return new Proxy(props, {
      get: (target, prop: string) => {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target, prop: string, value: unknown) => {
        const oldProps = { ...target };
        target[prop] = value;
        this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Access denied');
      },
    });
  }

  private _createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }

  public show(): void {
    if (this.element) {
      this.element.style.display = 'block';
    }
  }

  public hide(): void {
    if (this.element) {
      this.element.style.display = 'none';
    }
  }
}
