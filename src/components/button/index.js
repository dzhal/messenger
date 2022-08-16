import Handlebars from 'handlebars';
import { buttonTemplate } from './button.tmpl';

export const button = Handlebars.registerPartial('button', buttonTemplate);
