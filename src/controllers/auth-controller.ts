import API, { AuthAPI } from '../api/auth-api';
import { ROUTES } from '../constants/constant-routes';
import router from '../utils/router';
import store from '../utils/store';
import { TLogin, TRegister } from '../utils/types';

export class AuthController {
  private readonly api: AuthAPI;

  constructor() {
    this.api = API;
  }

  async signin(data: TLogin) {
    try {
      await this.api.signin(data);
      router.go(ROUTES.chat);
      await this.fetchUser();
    } catch (e) {
      console.log(e);
    }
  }

  async signup(data: TRegister) {
    try {
      await this.api.signup(data);
      await this.fetchUser();
      router.go(ROUTES.profile);
    } catch (e) {
      console.log(e);
    }
  }

  async fetchUser() {
    const user = await this.api.read();
    console.log(user);

    store.set('user', user);
    console.log(store);
  }

  async logout() {
    try {
      await this.api.logout();
      router.go(ROUTES.login);
    } catch (e) {
      console.log(e);
    }
  }
}

export default new AuthController();
