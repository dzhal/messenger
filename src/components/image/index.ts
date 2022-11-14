import Handlebars from 'handlebars';
import Block from '../../core/block';
import template from './image.template';

export default class Image extends Block {
  render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
