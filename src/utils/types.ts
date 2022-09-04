export interface IEventBus {
  on(event: string, callback: () => void): void;
  off(event: string, callback: () => void): void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  emit(event: string, ...args: any[]): void;
}

export interface IBlock {
  props: TProps;
  getElementForEvent(): HTMLElement;
  getWrapperElement(): HTMLElement;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TProps = Record<string, any>;

export type TMeta = {
  tagName: string;
  props: TProps;
};
