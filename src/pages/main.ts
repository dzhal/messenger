import Avatar from '../components/avatar';
import Chat from '../components/chat';
import ChatList from '../components/chat-list';
import ChatShort from '../components/chat-short';
import Main from '../components/main';
import Search from '../components/search';
import clip from '../assets/images/clip.svg';
import send from '../assets/images/send.svg';
import Input from '../components/input';
import Image from '../components/image';
import Button from '../components/button';
import { handleSendMessage } from '../utils/handleSendMessage';
import router from '../utils/router';

const chatListTemplate = new ChatList({
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

const chatTemplate = new Chat({
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

const fragment = new Main({
  chatList: chatListTemplate,
  chat: chatTemplate,
});

export default fragment.getContent();
