// import Login from './components/login';
import Profile from './pages/profile';
import Login from './pages/login';
import Register from './pages/register';
import Main from './pages/main';
import Page404 from './pages/404';
import Page500 from './pages/500';
import router from './utils/router';
import AuthController from './controllers/auth-controller';

document.addEventListener('DOMContentLoaded', async () => {
  router
    .use('/', Login)
    .use('/sign-up', Register)
    .use('/settings', Profile)
    .use('/messenger', Main)
    .use('/404', Page404)
    .use('/500', Page500);

  try {
    await AuthController.fetchUser();
    router.start();
    if (
      window.location.pathname === '/' ||
      window.location.pathname === '/sign-up'
    ) {
      router.go('/messenger');
    }
  } catch {
    router.start();
    router.go('/');
  }
});
