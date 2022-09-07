import Handlebars from 'handlebars';
import Block from '../../utils/block';
import template from './button.tmpl';

export default class Button extends Block {
  render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
