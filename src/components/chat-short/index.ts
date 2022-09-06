import Handlebars from 'handlebars';
import Block from '../../utils/block';
import { TProps } from '../../utils/types';
import template from './chat-short.tmpl';

export default class ChatShort extends Block {
  constructor(props: TProps) {
    super('div', props);
  }

  render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
