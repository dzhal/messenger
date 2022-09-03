import template from './input.tmpl';
import Handlebars from 'handlebars';
import Block from '../../utils/block';
import { TProps } from '../../utils/types';

export default class Input extends Block {
  constructor(props: TProps) {
    super();
    this.props = props;
  }

  public render() {
    return Handlebars.compile(template, { noEscape: true })(this.props);
  }
}
