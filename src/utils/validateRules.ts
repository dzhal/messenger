import { Validator } from './types';
import {
  and,
  getPassValue,
  isContainCapitalLetter,
  isContainDigit,
  isEmailPattern,
  isFirstCapital,
  isLoginPattern,
  isNamePattern,
  isPhone,
  maxLength,
  minLength,
  notNumber,
  noWhiteSpaces,
  sameAs,
} from './validateHelpers';

export const loginRules: Record<string, Validator> = {
  login: and(
    minLength(3),
    maxLength(20),
    noWhiteSpaces,
    notNumber,
    isLoginPattern,
  ),
  password: and(
    minLength(8),
    maxLength(40),
    isContainCapitalLetter,
    isContainDigit,
  ),
};
export const chatNameRules: Record<string, Validator> = {
  addChat: and(minLength(2), maxLength(20)),
};
export const editProfileRules: Record<string, Validator> = {
  email: isEmailPattern,
  login: and(
    minLength(3),
    maxLength(20),
    noWhiteSpaces,
    notNumber,
    isLoginPattern,
  ),
  first_name: and(
    minLength(2),
    maxLength(20),
    noWhiteSpaces,
    isFirstCapital,
    isNamePattern,
  ),
  second_name: and(
    minLength(2),
    maxLength(20),
    noWhiteSpaces,
    isFirstCapital,
    isNamePattern,
  ),
  display_name: and(
    minLength(3),
    maxLength(20),
    noWhiteSpaces,
    notNumber,
    isLoginPattern,
  ),
  phone: and(minLength(10), maxLength(15), isPhone),
  password: and(
    minLength(8),
    maxLength(40),
    isContainCapitalLetter,
    isContainDigit,
  ),
};
export const registerRules: Record<string, Validator> = {
  email: isEmailPattern,
  login: and(
    minLength(3),
    maxLength(20),
    noWhiteSpaces,
    notNumber,
    isLoginPattern,
  ),
  first_name: and(
    minLength(2),
    maxLength(20),
    noWhiteSpaces,
    isFirstCapital,
    isNamePattern,
  ),
  second_name: and(
    minLength(2),
    maxLength(20),
    noWhiteSpaces,
    isFirstCapital,
    isNamePattern,
  ),
  phone: and(minLength(10), maxLength(15), isPhone),
  password: and(
    minLength(8),
    maxLength(40),
    isContainCapitalLetter,
    isContainDigit,
  ),
  password_repeat: and(
    minLength(8),
    maxLength(40),
    isContainCapitalLetter,
    isContainDigit,
    sameAs(getPassValue),
  ),
};
