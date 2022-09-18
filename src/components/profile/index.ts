import Handlebars from 'handlebars';
import Block from '../../utils/block';
import { withStore } from '../../utils/store';
import template from './profile.tmpl';

export default class ProfileBase extends Block {
  render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}

const withUser = withStore((state) => ({ ...state.user }));

export const ProfilePage = withUser(ProfileBase);
