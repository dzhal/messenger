import { TAddUsersToChat, TCreateChat, TDeleteChat } from '../utils/types';
import BaseAPI from './base-api';

export class ChatAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  getChats() {
    return this.http.get('/');
  }

  createChat(data: TCreateChat) {
    return this.http.post('/', data);
  }

  deleteChat(data: TDeleteChat) {
    return this.http.delete('/', data);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getChatUsers(id: number): Promise<any> {
    return this.http.post(`/token/${id}`).then((response) => response.token);
  }

  addUsersToChat(data: TAddUsersToChat) {
    return this.http.put('/users', data);
  }

  deleteUsersFromChat(data: TAddUsersToChat) {
    return this.http.delete('/users', data);
  }

  read = undefined;

  create = undefined;

  update = undefined;

  delete = undefined;
}

export default new ChatAPI();
