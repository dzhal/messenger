import template from './500.tmpl';
import Handlebars from 'handlebars';
import Block from '../../utils/block';
import { TProps } from '../../utils/types';

export default class Page500 extends Block {
  constructor(props: TProps) {
    super('div', props);
  }

  render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
