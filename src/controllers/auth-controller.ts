import API, { AuthAPI } from '../api/auth-api';
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
      router.go('/messenger');
    } catch (e) {
      console.log(e);
    }
  }

  async signup(data: TRegister) {
    try {
      await this.api.signup(data);
      await this.fetchUser();
      router.go('/messenger');
    } catch (e) {
      console.log(e);
    }
  }

  async fetchUser() {
    try {
      const user = await this.api.read();
      store.set('user', user);
    } catch (e) {
      console.log(e);
    }
  }

  async logout() {
    try {
      await this.api.logout();
      router.go('/');
    } catch (e) {
      console.log(e);
    }
  }
}

export default new AuthController();
