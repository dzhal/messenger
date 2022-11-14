import Handlebars from 'handlebars';
import Block from '../../core/block';
import template from './search-user-form.tmpl';

export default class SearchUserForm extends Block {
  render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
