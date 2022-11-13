export interface IEventBus {
  on(event: string, callback: () => void): void;
  off(event: string, callback: () => void): void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  emit(event: string, ...args: any[]): void;
}
export type TChat = {
  avatar: null | string;
  created_by: number;
  id: number;
  last_message: {
    content: string;
    id: number;
    time: string;
    user: TUserData;
  };
  title: '';
  unread_count: 0;
};
export type TCreateChat = {
  title: string;
};

export type TDeleteChat = {
  chatId: number;
};
export type TMessage = {
  chat_id: number;
  content: string;
  file: null | unknown;
  id: number;
  is_read: boolean;
  time: string;
  type: string;
  user_id: number;
};
export type TStore = {
  user?: Omit<TUser, 'password'> & { display_name: string | null };
  chats?: TChat[];
  currentChat?: number | undefined;
  token?: string;
  messages?: TMessage[];
};

export interface IBlock {
  props: TProps;
  getElementForEvent(): HTMLElement;
  getWrapperElement(): HTMLElement;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TProps = Record<string, any>;
export type TUserData = {
  first_name?: string;
  second_name?: string;
  display_name?: string;
  login?: string;
  email?: string;
  phone?: string;
};
export type TUsersToChat = {
  users: TUserData[];
  chatId: number;
};
export type TChangePassData = {
  oldPassword: string;
  newPassword: string;
};
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
