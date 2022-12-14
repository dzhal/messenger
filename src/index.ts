// import Login from './components/login';
import { MainPage } from './pages/main/index';
import { Page404 } from './pages/404/index';
import { Page500 } from './pages/500/index';
import router from './core/router';
import AuthController from './controllers/auth-controller';
import { ProfilePage } from './pages/profile/';
import { ROUTES } from './constants/constant-routes';
import { LoginPage } from './pages/login/index';
import { RegisterPage } from './pages/register/index';
import { EditProfilePage } from './pages/profile-edit';
import { ChangeAvatarPage } from './pages/avatar-edit';
import { ChangePasswordPage } from './pages/password-edit';
import ChatController from './controllers/chat-controller';

document.addEventListener('DOMContentLoaded', async () => {
  router
    .use(ROUTES.login, LoginPage)
    .use(ROUTES.register, RegisterPage)
    .use(ROUTES.profile, ProfilePage)
    .use(ROUTES.profileEdit, EditProfilePage)
    .use(ROUTES.page500, Page500)
    .use(ROUTES.page404, Page404)
    .use(ROUTES.chat, MainPage)
    .use(ROUTES.changeAvatar, ChangeAvatarPage)
    .use(ROUTES.changePassword, ChangePasswordPage);

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case ROUTES.login:
    case ROUTES.register:
      isProtectedRoute = false;
      break;
  }

  try {
    await AuthController.fetchUser();
    await ChatController.getChats();
    router.start();

    if (!isProtectedRoute) {
      router.go(ROUTES.chat);
    }
  } catch {
    router.start();
    router.go('/');
  }
});
