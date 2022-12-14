import EventBus from './event-bus';
import { IBlock, IEventBus, TProps } from '../utils/types';
import { nanoid } from 'nanoid';
import { TemplateDelegate } from 'handlebars';

export default class Block implements IBlock {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  private _element: HTMLElement = document.createElement('div');

  public props: TProps = <TProps>{};

  public id = nanoid(6);

  public children: Record<string, Block | Block[]>;

  private eventBus: () => IEventBus;

  /** JSDoc
   * @param {Object} propsWithChildren
   *
   * @returns {void}
   */

  constructor(propsWithChildren: TProps = {}) {
    const eventBus = new EventBus();

    const { props, children } = this._getChildrenAndProps(propsWithChildren);

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this.children = children;

    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(eventBus: IEventBus): void {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  protected _getChildrenAndProps(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    childrenAndProps: Record<string, Block | any>,
  ) {
    const props: TProps = {};
    const children: Record<string, Block | Block[]> = {};

    Object.entries(childrenAndProps).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        const valuesChild = [] as Block[];
        value.forEach((item) => {
          if (item instanceof Block) {
            valuesChild.push(item);
          } else {
            props[key] = item;
          }
        });
        children[key] = valuesChild;
      }
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { props, children };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected compile(template: TemplateDelegate, context: Record<string, any>) {
    const contextAndStubs = { ...context };

    Object.entries(this.children).forEach(([name, component]) => {
      if (Array.isArray(component)) {
        contextAndStubs[name] = component.map(
          (child) => `<div data-id="${child.id}"></div>`,
        );

        return;
      }
      contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
    });
    const html = template(contextAndStubs);
    const temp = document.createElement('template');
    temp.innerHTML = html;
    Object.entries(this.children).forEach(([, component]) => {
      if (Array.isArray(component)) {
        component.forEach((child) => {
          const stub = temp.content.querySelector(`[data-id="${child.id}"]`);
          if (!stub) {
            return;
          }
          child.getContent()?.append(...Array.from(stub.childNodes));
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          stub.replaceWith(child.getContent()!);
        });
        return;
      }

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

  private _init() {
    this.init();

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  init(): void {}

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

  public componentDidUpdate(oldProps: TProps, newProps: TProps): boolean {
    if (oldProps !== newProps) {
      return true;
    }
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
    const newElement = fragment.firstElementChild;

    if (this._element) {
      this._element.replaceWith(newElement as HTMLElement);
    }

    this._element = newElement as HTMLElement;

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
