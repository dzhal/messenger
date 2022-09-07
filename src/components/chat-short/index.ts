import Handlebars from 'handlebars';
import Block from '../../utils/block';
import template from './chat-short.tmpl';

export default class ChatShort extends Block {
  render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
