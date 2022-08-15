import { chatTemplate } from './chat.tmpl';
import Handlebars from 'handlebars';

export const chat = Handlebars.registerPartial('chat', chatTemplate);
