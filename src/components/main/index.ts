import template from './main.tmpl';
import Handlebars from 'handlebars';
import Block from '../../utils/block';

export default class Main extends Block {
  render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
