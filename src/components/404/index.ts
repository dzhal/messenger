import template from './404.tmpl';
import Handlebars from 'handlebars';
import Block from '../../utils/block';
import { TProps } from '../../utils/types';

export default class Page404 extends Block {
  public template: string = template;

  constructor(props: TProps) {
    super();
    this.props = props;
  }

  public render() {
    return Handlebars.compile(template, { noEscape: true })(this.props);
  }
}
