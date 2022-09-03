import Handlebars from 'handlebars';
import template from './avatar.tmpl';

export const avatar = Handlebars.registerPartial('avatar', template);
