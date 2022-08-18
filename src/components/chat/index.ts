import Handlebars from 'handlebars'
import template from './chat.tmpl'

export const chat = Handlebars.registerPartial('chat', template)
