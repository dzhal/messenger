export interface IEventBus {
  on(event: string, callback: () => void): void;
  off(event: string, callback: () => void): void;
  emit(event: string, ...args: any[]): void;
}

export interface IBlock {
  props: TProps;
  getElementForEvent(): HTMLElement;
  getWrapperElement(): HTMLElement;
}

export type TProps = Record<string, any>;

export type TMeta = {
  tagName: string;
  props: TProps;
};
