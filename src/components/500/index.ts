import template from './500.tmpl';
import Handlebars from 'handlebars';
import Block from '../../utils/block';
import { TProps } from '../../utils/types';

export default class Page500 extends Block {
  public template: string = template;

  constructor(props: TProps) {
    super();
    this.props = props;
  }

  public render() {
    return Handlebars.compile(template, { noEscape: true })(this.props);
  }
}
