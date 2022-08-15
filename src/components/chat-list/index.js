import { chatListTemplate } from './chat-list.tmpl';
import Handlebars from 'handlebars';

export const chatList = Handlebars.registerPartial(
  'chatList',
  chatListTemplate
);
