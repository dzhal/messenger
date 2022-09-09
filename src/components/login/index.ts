import template from './login.tmpl';
import Handlebars from 'handlebars';
import Block from '../../utils/block';

export default class Login extends Block {
  render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
