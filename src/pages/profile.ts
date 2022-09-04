import Input from '../components/input';
import Profile from '../components/profile';
import back from '../assets/images/back.svg';
import Avatar from '../components/avatar';
import Button from '../components/button';

const template = [
  new Profile({
    back: back,
    avatar: new Avatar({}).render(),
    name: 'Ivan',
    inputEmail: new Input({
      type: 'text',
      name: 'email',
      placeholder: 'Email',
      disabled: 'disabled',
      value: 'ivan@gmail.com',
    }).render(),
    inputLogin: new Input({
      type: 'text',
      name: 'login',
      placeholder: 'Login',
      disabled: 'disabled',
      value: 'ivanivanov',
    }).render(),
    inputFirstName: new Input({
      type: 'text',
      name: 'first_name',
      placeholder: 'Name',
      disabled: 'disabled',
      value: 'ivan',
    }).render(),
    inputSecondName: new Input({
      type: 'text',
      name: 'second_name',
      placeholder: 'Surname',
      disabled: 'disabled',
      value: 'ivanov',
    }).render(),
    inputPhone: new Input({
      type: 'text',
      name: 'phone',
      placeholder: 'Phone number',
      disabled: 'disabled',
      value: '+7 (909) 967 30 30',
    }).render(),
    inputChatName: new Input({
      type: 'text',
      name: 'chat_name',
      placeholder: 'Chatname',
      disabled: 'disabled',
      value: 'ivanishe',
    }).render(),
    buttonChangeData: new Button({
      type: 'button',
      style: 'secondary',
      text: 'Change data',
    }).render(),
    buttonPassword: new Button({
      type: 'button',
      style: 'secondary',
      text: 'Change password',
    }).render(),
    buttonQuit: new Button({
      type: 'button',
      style: 'secondary',
      text: 'Quit',
    }).render(),
  }).render(),
].join();

document.getElementById('root')!.innerHTML = template;
