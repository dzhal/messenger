import { validateInput } from './validateInput';

export function handleSendMessage() {
  const messageInput = document.getElementsByName(
    'message',
  )[0] as HTMLInputElement;
  if (!validateInput('message', messageInput.value)) {
    console.log('empty message');
  }
}
