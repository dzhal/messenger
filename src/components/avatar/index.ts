import Handlebars from 'handlebars';
import Block from '../../utils/block';
import template from './avatar.tmpl';

export default class Avatar extends Block {
  render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
