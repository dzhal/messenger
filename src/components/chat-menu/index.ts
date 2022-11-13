import Handlebars from 'handlebars';
import ChatController from '../../controllers/chat-controller';
import Block from '../../core/block';
import store from '../../core/store';
import { TProps } from '../../utils/types';
import Button from '../button';
import template from './chat-menu.tmpl';

export default class ChatMenu extends Block {
  constructor(props: TProps) {
    super({
      ...props,
      events: {
        click: () => this.clickChat(),
      },
    });
  }

  init(): void {
    this.children.addUserButton = new Button({
      type: 'button',
      className: 'button_secondary',
      text: 'Add user',
      events: {
        click: () => {},
      },
    });
    this.children.removeUserButton = new Button({
      type: 'button',
      className: 'button_secondary',
      text: 'Remove user',
      events: {
        click: () => {},
      },
    });
    this.children.removeButton = new Button({
      type: 'button',
      className: 'button_secondary',
      text: 'Remove chat',
      events: {
        click: () => {
          ChatController.deleteChat({ chatId: store.getState().currentChat! });
        },
      },
    });
  }

  public clickChat() {
    const submenu = document.querySelector('.submenu') as HTMLElement;
    if (submenu.style.display === 'none') {
      submenu.style.display = 'block';
      const removeChatElement = document.getElementById('#remove_chat');
      removeChatElement?.addEventListener('click', () => console.log('click'));

      // function removeChat();
    } else {
      submenu.style.display = 'none';
    }
  }

  render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
