import { registerTemplate } from './register.tmpl';
import Handlebars from 'handlebars';

export const register = Handlebars.compile(registerTemplate);
