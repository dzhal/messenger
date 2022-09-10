import template from './register.tmpl';
import Handlebars from 'handlebars';
import Block from '../../utils/block';

export default class Register extends Block {
  render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
