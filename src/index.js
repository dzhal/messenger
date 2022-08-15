// import { registerAvatarComponent } from './components/avatar';
import { main } from './pages/main';
import clip from './assets/images/clip.svg';
import send from './assets/images/send.svg';

const root = document.getElementById('root');
const mainHTML = main({ clip, send });
root.innerHTML = mainHTML;
