import Block from './block';

export default class Route {
  private block: Block | null = null;

  constructor(
    private pathname: string,
    private readonly blockClass: typeof Block,
    private readonly query: string,
  ) {}

  leave() {
    this.block = null;
  }

  match(pathname: string) {
    return isEqual(pathname, this.pathname);
  }

  render() {
    if (!this.block) {
      this.block = new this.blockClass({});

      render(this.query, this.block);
      return;
    }
  }
}

function isEqual(lhs: string, rhs: string) {
  return lhs === rhs;
}

function render(query: string, block: Block) {
  const root = document.querySelector(query);

  if (root === null) {
    throw new Error(`root not found by selector "${query}"`);
  }

  root.innerHTML = '';

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  root.append(block.getContent()!);

  return root;
}
