import Handlebars from 'handlebars';
import Block from '../../utils/block';
import template from './chat.tmpl';

export default class Chat extends Block {
  render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
