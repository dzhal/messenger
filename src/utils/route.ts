export default class Route {
  private _pathname: string;

  private _blockClass: HTMLElement;

  _block: HTMLElement | null;

  _props: Record<string, string>;

  constructor(
    pathname: string,
    view: HTMLElement,
    props: Record<string, string>,
  ) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string): void {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave(): void {
    this._block = null;
    const root = document.querySelector(this._props.rootQuery);
    if (root) {
      root.textContent = '';
    }
  }

  match(pathname: string): boolean {
    return isEqual(pathname, this._pathname);
  }

  render(): void {
    if (!this._block) {
      this._block = this._blockClass;
      render(this._props.rootQuery, this._block);
      return;
    }

    // this._block.show();
  }
}

function isEqual(lhs: string, rhs: string) {
  return lhs === rhs;
}

function render(query: string, block: HTMLElement) {
  const root = document.querySelector(query);
  root?.append(block);
  return root;
}
