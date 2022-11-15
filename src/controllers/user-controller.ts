import API, { UserAPI } from '../api/user-api';
import { ROUTES } from '../constants/constant-routes';
import router from '../core/router';
import { TChangePassData, TSearchLogin, TUserData } from '../utils/types';
import AuthController from './auth-controller';

export class UserController {
  private readonly api: UserAPI;

  constructor() {
    this.api = API;
  }

  async edit(data: TUserData) {
    try {
      await this.api.edit(data);
      await AuthController.fetchUser();
      await router.go(ROUTES.profile);
    } catch (e) {
      console.log(e);
    }
  }

  async changePassword(data: TChangePassData) {
    try {
      await this.api.changePassword(data);
      await router.go(ROUTES.profileEdit);
    } catch (e) {
      console.log(e);
    }
  }

  async changeAvatar(data: FormData) {
    try {
      await this.api.changeAvatar(data);
      await AuthController.fetchUser();
      await router.go(ROUTES.profile);
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

  async searchUser(data: TSearchLogin) {
    try {
      const user = await this.api.searchUser(data);
      return user;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new UserController();
