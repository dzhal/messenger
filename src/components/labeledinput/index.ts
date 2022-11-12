import template from './input.tmpl';
import Handlebars from 'handlebars';
import Block from '../../core/block';

export default class LabeledInput extends Block {
  public render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
