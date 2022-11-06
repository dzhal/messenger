import API, { UserAPI } from '../api/user-api';
import { ROUTES } from '../constants/constant-routes';
import router from '../utils/router';
import { TChangePassData, TUserData } from '../utils/types';
import AuthController from './auth-controller';

export class UserController {
  private readonly api: UserAPI;

  constructor() {
    this.api = API;
  }

  async edit(data: TUserData) {
    try {
      await this.api.edit(data);
      router.go(ROUTES.chat);
      await AuthController.fetchUser();
    } catch (e) {
      console.log(e);
    }
  }

  async changePassword(data: TChangePassData) {
    try {
      await this.api.changePassword(data);
    } catch (e) {
      console.log(e);
    }
  }

  async changeAvatar(data: FormData) {
    try {
      await this.api.changeAvatar(data);
    } catch (e) {
      console.log(e);
    }
  }

  async getUserById(id: number) {
    try {
      await this.api.getUserById(id);
    } catch (e) {
      console.log(e);
    }
  }

  async searchUser(login: string) {
    try {
      await this.api.searchUser(login);
    } catch (e) {
      console.log(e);
    }
  }
}

export default new UserController();
