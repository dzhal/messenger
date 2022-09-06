const regexEmail = /^[\w&.-]+@\w+.[A-Za-z]{2,4}/;
const regexName = /^[A-ZА-Я][A-Za-zА-Яа-я-]+/;
// const regexLogin = /^\w*[a-zA-Z-_]\w*$/g;
const regexLogin = /^[a-zA-Z-_]+$/;
const regexPhone = /^\+?\d{10,15}$/;
const regexPassword = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/;

export function validateInput(
  name: string,
  value: string,
): boolean | undefined {
  switch (name) {
    case 'email':
      return regexEmail.test(value);
    case 'first_name':
      return regexName.test(value);
    case 'second_name':
      return regexName.test(value);
    case 'login':
      return regexLogin.test(value);
    case 'phone':
      return regexPhone.test(value);
    case 'password':
      return regexPassword.test(value);
    case 'password-repeat':
      return (
        (document.getElementsByName('password')[0] as HTMLInputElement)
          .value === value
      );
    case 'message':
      return value.length > 0;
    default:
      return true;
  }
}
