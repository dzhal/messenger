import { Computed, Predicate, Validator } from './types';

export const valid = <T>(value: Computed<T>, validator: Validator): boolean =>
  validator(value() as unknown as string);

export const isLoginPattern = (str: string): boolean =>
  /^[a-zA-Z0-9-_]+$/.test(str);
export const isNamePattern = (str: string): boolean =>
  /^[a-zA-Zа-яА-Я-]+$/.test(str);
export const isEmailPattern = (str: string): boolean =>
  /^[\w&.-]+@\w+.[A-Za-z]{2,4}/.test(str);
export const isContainCapitalLetter = (str: string): boolean =>
  /.*(?=[A-Z]).*/.test(str);
export const isFirstCapital = (str: string): boolean => /^[A-ZА-Я]/.test(str);
export const isContainDigit = (str: string): boolean => /\d/.test(str);
export const isPhone = (str: string): boolean => /^\+?\d.+$/.test(str);
export const minLength =
  (limit: number) =>
  (str: string): boolean => {
    return str.length > limit;
  };
export const maxLength =
  (limit: number) =>
  (str: string): boolean => {
    return str.length < limit;
  };

export const isInt = (str: string): boolean => !isNaN(parseInt(str, 10));
export const isWhiteSpace = (str: string): boolean => str === ' ';
export const isEmpty = (str: string): boolean => /^$|\s+/.test(str);
export const has =
  (fn: Validator): Validator =>
  (value: string) =>
    Array.from(value).filter((x) => fn(x)).length !== 0;
export const not =
  (validator: Validator): Validator =>
  (value: string) =>
    !validator(value);
export const startsWith =
  (determineFn: Predicate): Validator =>
  (value) =>
    value.length > 0 ? determineFn(value[0]) : false;
export const sameAs =
  (another: () => string | string): Validator =>
  (value: string) =>
    value === another();
export const getPassValue = (): string =>
  (document.querySelector('input[name="password"') as HTMLInputElement).value;
export const and =
  (...validators: Validator[]): Validator =>
  (value: string): boolean =>
    validators.every((validator) => validator(value));
export const or =
  (...validators: Validator[]): Validator =>
  (value: string): boolean =>
    validators.some((validator) => validator(value));

export const hasNumber = has(isInt);
export const notNumber = not(isInt);
export const noWhiteSpaces = not(has(isWhiteSpace));
export const notEmpty = not(isEmpty);
