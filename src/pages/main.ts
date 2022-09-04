import Avatar from '../components/avatar';
import Chat from '../components/chat';
import ChatList from '../components/chat-list';
import ChatShort from '../components/chat-short';
import Main from '../components/main';
import Search from '../components/search';
import clip from '../assets/images/clip.svg';
import send from '../assets/images/send.svg';

const chatListTemplate = [
  new ChatList({
    search: new Search({}).render(),
    chatShort1: new ChatShort({
      avatar: new Avatar({}).render(),
      name: 'Vitalya',
      text: 'hello',
      time: '11:00',
      count: '1',
    }).render(),
    chatShort2: new ChatShort({
      avatar: new Avatar({}).render(),
      name: 'Andrew',
      text: 'Picture',
      time: '10:49',
      count: '2',
    }).render(),
    chatShort3: new ChatShort({
      avatar: new Avatar({}).render(),
      name: 'Ivan',
      text: 'kak dela?',
      time: '12:00',
      count: '10',
    }).render(),
  }).render(),
].join();

const chatTemplate = [
  new Chat({
    avatar: new Avatar({}).render(),
    clip: clip,
    send: send,
  }).render(),
];

const template = [
  new Main({
    chatList: chatListTemplate,
    chat: chatTemplate,
  }).render(),
].join('');

document.getElementById('root')!.innerHTML = template;
