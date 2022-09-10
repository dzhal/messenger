import { IEventBus } from './types';

export default class EventBus implements IEventBus {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private readonly listeners: Record<string, Array<(...args: any) => void>> =
    {};

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: () => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: () => void) {
    if (!this.listeners[event]) {
      throw new Error(`There is no event: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback,
    );
  }

  emit(event: string, ...args: []): void {
    if (!this.listeners[event]) {
      throw new Error(`There is no event: ${event}`);
    }

    this.listeners[event].forEach(function (listener) {
      listener(...args);
    });
  }
}
