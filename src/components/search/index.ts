import Handlebars from 'handlebars';
import template from './search.tmpl';

export const search = Handlebars.registerPartial('search', template);
