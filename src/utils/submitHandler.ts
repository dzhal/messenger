import { validateInput } from './validateInput';

export function submitHandler() {
  let validForm = true;
  const formData: Record<string, string> = {};
  const inputs = document.querySelectorAll('input');
  inputs.forEach((input) => {
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
