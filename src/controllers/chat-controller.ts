import API, { ChatAPI } from '../api/chat-api';
import store from '../core/store';
import {
  TAddUsersToChat,
  TChat,
  TCreateChat,
  TDeleteChat,
} from '../utils/types';

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
      await this.api.deleteChat(data);
      await this.getChats();
      store.set('token', '');
      store.set('currentChat', null);
    } catch (e) {
      console.log(e);
    }
  }

  async addUsersToChat(data: TAddUsersToChat) {
    try {
      await this.api.addUsersToChat(data);
    } catch (e) {
      console.log(e);
    }
  }

  async deleteUsersFromChat(data: TAddUsersToChat) {
    try {
      await this.api.deleteUsersFromChat(data);
    } catch (e) {
      console.log(e);
    }
  }
}

export default new ChatController();
