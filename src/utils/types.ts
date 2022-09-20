export interface IEventBus {
  on(event: string, callback: () => void): void;
  off(event: string, callback: () => void): void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  emit(event: string, ...args: any[]): void;
}

export type TStore = {
  user?: Omit<TUser, 'password'> & { display_name: string | null };
};

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
export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}
export type TOptions = {
  method: METHODS;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Indexed<T = any> = {
  [key in string]: T;
};
export type Validator = (value: string) => boolean;
export type Predicate = Validator;
export type Computed<T> = () => T;
export type TUser = {
  id: number;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
  avatar: string | null;
};
export type TRegister = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};
export type TLogin = {
  login: string;
  password: string;
};
