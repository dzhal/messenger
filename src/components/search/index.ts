import Handlebars from 'handlebars';
import Block from '../../utils/block';
import template from './search.tmpl';

export default class Search extends Block {
  render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
