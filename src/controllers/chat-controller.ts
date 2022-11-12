import API, { ChatAPI } from '../api/chat-api';
import store from '../core/store';
import { TChat, TCreateChat } from '../utils/types';

export class ChatController {
  private readonly api: ChatAPI;

  constructor() {
    this.api = API;
  }

  async getChats() {
    try {
      const chats = await this.api.getChats();
      console.log(chats);
      return (chats as TChat[]) || [];
    } catch (e) {
      console.log(e);
    }
  }

  async createChat(data: TCreateChat) {
    try {
      const chat = await this.api.createChat(data);
      const chats = await this.getChats();
      store.set('chats', chat);
    } catch (e) {
      console.log(e);
    }
  }
}

export default new ChatController();
