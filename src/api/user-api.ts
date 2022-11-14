import { TChangePassData, TSearchLogin, TUserData } from '../utils/types';
import BaseAPI from './base-api';

export class UserAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  edit(data: TUserData) {
    return this.http.put('/profile', { ...data });
  }

  changePassword(data: TChangePassData) {
    return this.http.put('/password', { ...data });
  }

  changeAvatar(data: FormData) {
    return this.http.put('/profile/avatar', data);
  }

  getUserById(id: number) {
    return this.http.get(`/${id}`);
  }

  searchUser(data: TSearchLogin) {
    return this.http.post('/search', data);
  }

  read = undefined;

  create = undefined;

  update = undefined;

  delete = undefined;
}

export default new UserAPI();
