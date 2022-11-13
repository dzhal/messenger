import Handlebars from 'handlebars';
import ChatController from '../../controllers/chat-controller';
import messagesController from '../../controllers/messages-controller';
import Block from '../../core/block';
import store from '../../core/store';
import { TProps } from '../../utils/types';
import template from './chat-short.tmpl';

export default class ChatShort extends Block {
  constructor(props: TProps) {
    super({
      ...props,
      events: {
        click: () => this.clickChat(),
      },
    });
  }

  public async clickChat() {
    ChatController.getChatUsers(this.props.id);
    store.set('currentChat', this.props.id);
    await messagesController.connect(this.props.id);
  }

  render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
