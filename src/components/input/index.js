import { inputTemplate } from './input.tmpl';
import Handlebars from 'handlebars';

export const input = Handlebars.registerPartial('input', inputTemplate);
