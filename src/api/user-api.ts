import HTTP from '../utils/custom-fetch';
import { TUser, TLogin } from '../utils/types';
import { BaseAPI } from './base-api';

const userAPIInstance = new HTTP('/auth');

export default class UserAPI extends BaseAPI {
  register(data: TUser) {
    return userAPIInstance.post('/signup', { data });
  }
  login(data: TLogin) {
    return userAPIInstance.post('/signin', { data });
  }
  getCurrentUser() {
    return userAPIInstance.get(`/user`);
  }
  logout() {
    return userAPIInstance.post(`/logout`);
  }
}
