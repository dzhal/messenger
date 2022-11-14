import Handlebars from 'handlebars';
import Block from '../../core/block';
import template from './chat-list.tmpl';

export default class ChatList extends Block {
  render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
