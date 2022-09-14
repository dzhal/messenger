import Page500 from '../components/500';
import Button from '../components/button';
import Router from '../utils/router';

const router = new Router('#root');

const fragment = new Page500({
  button: new Button({
    type: 'button',
    className: 'button_secondary',
    text: 'Назад к чатам',
    events: {
      click: () => router.go('/messenger'),
    },
  }),
});

export default fragment.getContent();
