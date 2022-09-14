import Handlebars from 'handlebars';
import Block from '../../utils/block';
import template from './backblock.tmpl';

export default class Backblock extends Block {
  render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
