import { TChat, TCreateChat, TDeleteChat } from '../utils/types';
import BaseAPI from './base-api';

export class ChatAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  getChats() {
    return this.http.get('/');
  }

  createChat(data: TCreateChat): Promise<TChat> {
    return this.http.post('/', data);
  }

  deleteChat(data: TDeleteChat) {
    return this.http.delete('/', data);
  }

  getChatUsers(id: number) {
    return this.http.post(`/token/${id}`);
  }

  read = undefined;

  create = undefined;

  update = undefined;

  delete = undefined;
}

export default new ChatAPI();
