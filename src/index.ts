// import Login from './components/login';
import Profile from './pages/profile';
import Login from './pages/login';
import Register from './pages/register';
import Router from './utils/router';
import Main from './pages/main';
import Page404 from './pages/404';
import Page500 from './pages/500';

const router = new Router('#root');

router
  .use('/', Login)
  .use('/sign-up', Register)
  .use('/settings', Profile)
  .use('/messenger', Main)
  .use('/404', Page404)
  .use('/500', Page500)
  .start();
