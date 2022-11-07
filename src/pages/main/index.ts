import template from './main.tmpl';
import Handlebars from 'handlebars';
import Block from '../../utils/block';
import ChatList from '../../components/chat-list';
import Button from '../../components/button';
import Image from '../../components/image';
import router from '../../utils/router';
import Search from '../../components/search';
import Avatar from '../../components/avatar';
import Chat from '../../components/chat';
import Input from '../../components/input';
import { handleSendMessage } from '../../utils/handleSendMessage';
import clip from '../../assets/images/clip.svg';
import send from '../../assets/images/send.svg';
import ChatController from '../../controllers/chat-controller';
import { ROUTES } from '../../constants/constant-routes';

export class Main extends Block {
  init(): void {
    const chats = ChatController.getChats();

    console.log(chats);

    this.children.chatList = new ChatList({
      button: new Button({
        text: 'Profile >',
        className: 'chatList_header',
        events: {
          click: () => router.go(ROUTES.profile),
        },
      }),
      search: new Search({}),
      chats: [
        {
          avatar: null,
          created_by: 90269,
          id: 1452,
          last_message: null,
          title: '123',
          unread_count: 0,
        },
      ],
    });
    this.children.chat = new Chat({
      avatar: new Avatar({}),
      chatName: 'Вадим',
      imageClip: new Image({
        src: clip,
        alt: 'clip',
      }),
      send: send,
      input: new Input({
        type: 'text',
        name: 'message',
        className: 'chat_input',
        placeholder: 'Enter message',
      }),
      button: new Button({
        className: 'chat_send',
        text: new Image({
          src: send,
          alt: 'send',
        }),
        events: {
          click: () => handleSendMessage(),
        },
      }),
    });
  }

  render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
