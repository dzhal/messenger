import template from './404.tmpl';
import Handlebars from 'handlebars';
import Block from '../../utils/block';
import router from '../../utils/router';
import { ROUTES } from '../../constants/constant-routes';
import Button from '../../components/button';

export class Page404 extends Block {
  init() {
    this.children.button = new Button({
      type: 'button',
      className: 'button_secondary',
      text: 'Назад к чатам',
      events: {
        click: () => router.go(ROUTES.chat),
      },
    });
  }
  render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
