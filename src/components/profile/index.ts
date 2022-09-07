import Handlebars from 'handlebars';
import Block from '../../utils/block';
import template from './profile.tmpl';

export default class Profile extends Block {
  render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
