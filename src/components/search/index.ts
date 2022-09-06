import Handlebars from 'handlebars';
import Block from '../../utils/block';
import { TProps } from '../../utils/types';
import template from './search.tmpl';

export default class Search extends Block {
  constructor(props: TProps) {
    super('div', props);
  }

  render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
