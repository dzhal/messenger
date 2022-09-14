import template from './404.tmpl';
import Handlebars from 'handlebars';
import Block from '../../utils/block';

export default class Page404 extends Block {
  render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
