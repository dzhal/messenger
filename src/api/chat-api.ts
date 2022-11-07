import { TCreateChat } from '../utils/types';
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

  // addUserToChat(data: TUsersToChat) {
  //   return this.http.put('/users', data);
  // }

  read = undefined;

  create = undefined;

  update = undefined;

  delete = undefined;
}

export default new ChatAPI();
