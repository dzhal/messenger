import Handlebars from 'handlebars';
import Block from '../../core/block';
import template from './message.tmpl';

export default class Message extends Block {
  render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
