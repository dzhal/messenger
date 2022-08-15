import Handlebars from 'handlebars';
import { searchTemplate } from './search.tmpl';

export const search = Handlebars.registerPartial('search', searchTemplate);
