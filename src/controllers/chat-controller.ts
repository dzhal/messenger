import API, { ChatAPI } from '../api/chat-api';
import store from '../core/store';
import { TChat, TCreateChat, TDeleteChat } from '../utils/types';

export class ChatController {
  private readonly api: ChatAPI;

  constructor() {
    this.api = API;
  }

  async getChats() {
    try {
      const chats = await this.api.getChats();
      store.set('chats', chats);
      return chats as TChat[];
    } catch (e) {
      console.log(e);
    }
  }

  async getChatUsers(id: number) {
    try {
      const token = await this.api.getChatUsers(id);
      store.set('token', token);
      console.log(store);
      return token;
    } catch (e) {
      console.log(e);
    }
  }

  async createChat(data: TCreateChat) {
    try {
      await this.api.createChat(data);
      await this.getChats();
    } catch (e) {
      console.log(e);
    }
  }

  async deleteChat(data: TDeleteChat) {
    try {
      console.log('store before', store.getState());
      await this.api.deleteChat(data);
      const chats = store
        .getState()
        .chats?.filter((item) => item.id !== data.chatId);
      store.set('token', '');
      store.set('currentChat', null);
      store.set('chats', chats);
      console.log('store after', store.getState());
    } catch (e) {
      console.log(e);
    }
  }
}

export default new ChatController();
