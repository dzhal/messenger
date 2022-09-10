import { isEmpty, valid } from './validateHelpers';

export function handleSendMessage() {
  const messageInput = document.getElementsByName(
    'message',
  )[0] as HTMLInputElement;
  if (valid(() => messageInput.value, isEmpty)) {
    console.log('empty message');
  }
}
