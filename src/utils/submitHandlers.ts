import AuthController from '../controllers/auth-controller';
import { TLogin, TRegister } from './types';
import { valid } from './validateHelpers';
import { loginRules, registerRules } from './validateRules';

export function loginSubmitHandler() {
  let validForm = true;
  const formData: Record<string, string> = {};
  const loginInputs =
    document.querySelector('.login_container')?.querySelectorAll('input') ?? [];

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  loginInputs.forEach((input) => {
    if (!valid(() => input.value, loginRules[input.name])) {
      input.classList.add('invalid');
      const error = input.parentNode?.querySelector('.input_error');
      if (error) {
        error.textContent = `Enter correct ${input.name}`;
      }
      validForm = false;
    }
    formData[input.name] = input.value;
  });

  if (validForm) {
    console.log(formData);
    AuthController.signin(formData as TLogin);
  }
}

export function registrationSubmitHandler() {
  let validForm = true;
  const formData: Record<string, string> = {};
  const registerInputs =
    document.querySelector('.register_container')?.querySelectorAll('input') ??
    [];
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  registerInputs.forEach((input) => {
    if (!valid(() => input.value, registerRules[input.name])) {
      input.classList.add('invalid');
      const error = input.parentNode?.querySelector('.input_error');
      if (error) {
        error.textContent = `Enter correct ${input.name}`;
      }
      validForm = false;
    }
    formData[input.name] = input.value;
  });

  if (validForm) {
    console.log(formData);
    AuthController.signup(formData as TRegister);
  }
}
