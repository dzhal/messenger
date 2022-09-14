import template from './500.tmpl';
import Handlebars from 'handlebars';
import Block from '../../utils/block';

export default class Page500 extends Block {
  render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
