import messagesController from '../controllers/messages-controller';
import { isEmpty, valid } from './validateHelpers';

export async function handleSendMessage() {
  const messageInput = document.getElementsByName(
    'message',
  )[0] as HTMLInputElement;
  if (valid(() => messageInput.value, isEmpty)) {
    console.log('empty message');
  }
  const response = await messagesController.sendMessage(messageInput.value);
  console.log(response);
  if (response) {
    console.log(response);
    messageInput.value = '';
  }
}
