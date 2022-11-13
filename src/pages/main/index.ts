import template from './main.tmpl';
import Handlebars from 'handlebars';
import Block from '../../core/block';
import ChatList from '../../components/chat-list';
import Button from '../../components/button';
import Image from '../../components/image';
import router from '../../core/router';
import Search from '../../components/search';
import Avatar from '../../components/avatar';
import Chat from '../../components/chat';
import Input from '../../components/input';
import { handleSendMessage } from '../../utils/handleSendMessage';
import clip from '../../assets/images/clip.svg';
import send from '../../assets/images/send.svg';
import { ROUTES } from '../../constants/constant-routes';
import ChatShort from '../../components/chat-short';
import store, { withStore } from '../../core/store';
import ChatMenu from '../../components/chat-menu';
import LabeledInput from '../../components/labeledinput';
import ChatController from '../../controllers/chat-controller';

export class Main extends Block {
  init(): void {
    console.log('chat props', this.props);
    console.log('chat state', store);
    const chats = store.getState().chats?.map(
      (chat) =>
        new ChatShort({
          name: chat.title,
          count: chat.unread_count,
          time: chat.last_message?.time,
          id: chat.id,
          createdBy: chat.created_by,
          avatar: chat.avatar,
        }),
    );
    const messages = store.getState().messages;

    this.children.chatList = new ChatList({
      button: new Button({
        text: 'Profile >',
        className: 'chatList_header',
        events: {
          click: () => router.go(ROUTES.profile),
        },
      }),
      search: new Search({}),
      chats: chats,
      inputChatName: new LabeledInput({
        input: new Input({
          type: 'text',
          name: 'addChat',
        }),
        placeholder: 'Enter chat name',
      }),
      buttonAddChat: new Button({
        type: 'button',
        className: 'button_primary',
        text: 'Add chat',
        events: {
          click: () => {
            const chatName = (
              document.querySelector(
                'input[name ="addChat"',
              ) as HTMLInputElement
            ).value;
            ChatController.createChat({ title: chatName });
            (
              document.querySelector(
                'input[name ="addChat"',
              ) as HTMLInputElement
            ).value = '';
          },
        },
      }),
    });
    this.children.chat = new Chat({
      avatar: new Avatar({}),
      chatName: 'bulba',
      imageClip: new Image({
        src: clip,
        alt: 'clip',
      }),
      chatMenu: new ChatMenu({}),
      send: send,
      messages: messages,
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

const withState = withStore((state) => ({
  chats: [...state.chats],
  currentChat: { ...state.currentChat },
}));

export const MainPage = withState(Main);
