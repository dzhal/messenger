import { TUser, TLogin, TRegister } from '../utils/types';
import BaseAPI from './base-api';

export class AuthAPI extends BaseAPI {
  constructor() {
    super('/auth');
  }

  signup(data: TRegister) {
    return this.http.post('/signup', { ...data });
  }

  signin(data: TLogin) {
    return this.http.post('/signin', { ...data });
  }

  read(): Promise<TUser> {
    return this.http.get('/user');
  }

  logout() {
    return this.http.post('/logout');
  }

  create = undefined;

  update = undefined;

  delete = undefined;
}

export default new AuthAPI();
