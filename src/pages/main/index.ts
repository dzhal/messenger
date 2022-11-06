import template from './main.tmpl';
import Handlebars from 'handlebars';
import Block from '../../utils/block';
import ChatList from '../../components/chat-list';
import Button from '../../components/button';
import Image from '../../components/image';
import router from '../../utils/router';
import Search from '../../components/search';
import ChatShort from '../../components/chat-short';
import Avatar from '../../components/avatar';
import Chat from '../../components/chat';
import Input from '../../components/input';
import { handleSendMessage } from '../../utils/handleSendMessage';
import clip from '../../assets/images/clip.svg';
import send from '../../assets/images/send.svg';

export class Main extends Block {
  init(): void {
    this.children.chatList = new ChatList({
      button: new Button({
        text: 'Profile >',
        className: 'chatList_header',
        events: {
          click: () => router.go('/settings'),
        },
      }),
      search: new Search({}),
      chatShort1: new ChatShort({
        avatar: new Avatar({}),
        name: 'Vitalya',
        text: 'hello',
        time: '11:00',
        count: '1',
      }),
      chatShort2: new ChatShort({
        avatar: new Avatar({}),
        name: 'Andrew',
        text: 'Picture',
        time: '10:49',
        count: '2',
      }),
      chatShort3: new ChatShort({
        avatar: new Avatar({}),
        name: 'Ivan',
        text: 'kak dela?',
        time: '12:00',
        count: '10',
      }),
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
