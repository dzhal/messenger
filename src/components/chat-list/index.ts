import Handlebars from 'handlebars';
import template from './chat-list.tmpl';

export const chatList = Handlebars.registerPartial('chatList', template);
