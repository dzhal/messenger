import Handlebars from 'handlebars';
import Block from '../../utils/block';
import { TProps } from '../../utils/types';
import template from './search.tmpl';

export default class Search extends Block {
  public template: string = template;

  constructor(props: TProps) {
    super();
    this.props = props;
  }

  public render() {
    return Handlebars.compile(template, { noEscape: true })(this.props);
  }
}
