import BaseAPI from './base-api';

type TUserData = {
  first_name?: string;
  second_name?: string;
  display_name?: string;
  login?: string;
  email?: string;
  phone?: string;
};
type TChangePassData = {
  oldPassword: string;
  newPassword: string;
};
export class UserAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  edit(data: TUserData) {
    return this.http.put('profile', { ...data });
  }

  changePassword(data: TChangePassData) {
    return this.http.put('password', { ...data });
  }

  changeAvatar(data: FormData) {
    return this.http.put('profile/avatar', data);
  }

  getUserById(id: number) {
    return this.http.get(`${id}`);
  }

  searchUsers(login: string) {
    return this.http.post('search', login);
  }

  read = undefined;

  create = undefined;

  update = undefined;

  delete = undefined;
}

export default new UserAPI();
