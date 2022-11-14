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
import { chatNameRules, loginRules } from '../../utils/validateRules';
import Message from '../../components/message';
import SearchUserForm from '../../components/search-user-form';
import UserController from '../../controllers/user-controller';
import { TUser } from '../../utils/types';

export class Main extends Block {
  init(): void {
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

    const currentChatId = this.props.currentChat;
    const currentChat = store
      .getState()
      .chats?.find((chat) => chat.id === currentChatId);

    const messages = store.getState().messages?.map(
      (message) =>
        new Message({
          self: message.user_id === store.getState().user?.id ? 'user' : '',
          text: message.content,
        }),
    );

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
          rules: chatNameRules.addChat,
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
                'input[name ="addChat"]',
              ) as HTMLInputElement
            ).value;
            ChatController.createChat({ title: chatName });
            (
              document.querySelector(
                'input[name ="addChat"]',
              ) as HTMLInputElement
            ).value = '';
          },
        },
      }),
    });
    this.children.chat = new Chat({
      avatar: new Avatar({}),
      chatName: currentChat?.title,
      imageClip: new Image({
        src: clip,
        alt: 'clip',
      }),
      chatMenu: new ChatMenu({}),
      searchUserForm: new SearchUserForm({
        title: 'Add or remove user',
        inputUserName: new LabeledInput({
          input: new Input({
            type: 'text',
            name: 'search_login',
            rules: loginRules.login,
          }),
          placeholder: 'Enter login',
        }),
        buttonAdd: new Button({
          type: 'button',
          className: 'button_primary',
          text: 'Add user',
          events: {
            click: async () => {
              const input = document.querySelector(
                'input[name ="search_login"]',
              ) as HTMLInputElement;
              const users: TUser[] = await UserController.searchUser({
                login: input.value,
              });
              if (users) {
                await ChatController.addUsersToChat({
                  users: users.map((user) => user.id),
                  chatId: currentChatId,
                });
              }
            },
          },
        }),
        buttonRemove: new Button({
          type: 'button',
          className: 'button_primary',
          text: 'Remove user',
          events: {
            click: async () => {
              const input = document.querySelector(
                'input[name ="search_login"]',
              ) as HTMLInputElement;
              const users: TUser[] = await UserController.searchUser({
                login: input.value,
              });
              if (users) {
                await ChatController.deleteUsersFromChat({
                  users: users.map((user) => user.id),
                  chatId: currentChatId,
                });
              }
            },
          },
        }),
      }),
      send: send,
      currentChat: currentChatId,
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
    this.init();
    return this.compile(Handlebars.compile(template), this.props);
  }
}

const withState = withStore((state) => ({
  chats: [...state.chats] ?? null,
  currentChat: state.currentChat,
  messages: state.messages ? [...state.messages] : null,
}));

export const MainPage = withState(Main);
