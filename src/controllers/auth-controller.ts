import API, { AuthAPI } from '../api/auth-api';
import router from '../utils/router';
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
    await this.api.signup(data);
  }

  async fetchUser() {
    await this.api.read();
  }

  async logout() {
    await this.api.logout();
  }
}

export default new AuthController();
