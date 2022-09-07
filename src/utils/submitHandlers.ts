import { validateInput } from './validateInput';

export function loginSubmitHandler() {
  let validForm = true;
  const formData: Record<string, string> = {};
  const registerInputs = document
    .querySelector('.login_container')
    ?.querySelectorAll('input');

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  registerInputs!.forEach((input) => {
    if (!validateInput(input.name, input.value)) {
      input.classList.add('invalid');
      const error = input.parentNode?.querySelector('.error');
      if (error) {
        error.textContent = `Enter correct ${input.name}`;
      }
      validForm = false;
    }
    formData[input.name] = input.value;
  });

  if (validForm) {
    console.log(formData);
  }
}

export function registrationSubmitHandler() {
  let validForm = true;
  const formData: Record<string, string> = {};
  const registerInputs = document
    .querySelector('.register_container')
    ?.querySelectorAll('input');

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  registerInputs!.forEach((input) => {
    if (!validateInput(input.name, input.value)) {
      input.classList.add('invalid');
      const error = input.parentNode?.querySelector('.error');
      if (error) {
        error.textContent = `Enter correct ${input.name}`;
      }
      validForm = false;
    }
    formData[input.name] = input.value;
  });

  if (validForm) {
    console.log(formData);
  }
}
