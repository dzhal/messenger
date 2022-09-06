import template from './input.tmpl';
import Handlebars from 'handlebars';
import Block from '../../utils/block';
import { TProps } from '../../utils/types';

export default class LabeledInput extends Block {
  constructor(props: TProps) {
    super('div', props);
  }

  public render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
