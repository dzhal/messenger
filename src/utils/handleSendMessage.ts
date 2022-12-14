import messagesController from '../controllers/messages-controller';
import { isEmpty, valid } from './validateHelpers';

export async function handleSendMessage() {
  const messageInput = document.getElementsByName(
    'message',
  )[0] as HTMLInputElement;
  if (valid(() => messageInput.value, isEmpty)) {
    console.log('empty message');
    return;
  }
  const response = await messagesController.sendMessage(messageInput.value);
  if (response) {
    messageInput.value = '';
  }
}
