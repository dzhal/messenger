import Handlebars from 'handlebars';
import Block from '../../utils/block';
import { TProps } from '../../utils/types';
import template from './profile.tmpl';

export default class Profile extends Block {
  constructor(props: TProps) {
    super('div', props);
  }

  render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
