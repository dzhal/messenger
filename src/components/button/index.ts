import Handlebars from 'handlebars';
import Block from '../../utils/block';
import { TProps } from '../../utils/types';
import template from './button.tmpl';

export default class Button extends Block {
  constructor(props: TProps) {
    super();
    this.props = props;
  }

  render(): string {
    return Handlebars.compile(template, { noEscape: true })(this.props);
  }
}
