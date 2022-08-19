// import { registerAvatarComponent } from './components/avatar';
import { main } from './pages/main'
import { page404 } from './pages/404'
import { page500 } from './pages/500'
import { login } from './pages/login'
import { register } from './pages/register'
import { profile } from './pages/profile'
import clip from './assets/images/clip.svg'
import send from './assets/images/send.svg'
import back from './assets/images/back.svg'

const root = document.getElementById('root')
const htmlPage404 = page404({})
const htmlPage500 = page500({})
const htmlRegister = register({})
const htmlProfile = profile({ back })
const htmlLogin = login({})

const mainHTML = main({ clip, send })
if (!root) {
  throw new Error('add id root')
}
root.innerHTML = mainHTML

if (window.location.pathname === '/404.html') {
  root.innerHTML = htmlPage404
} else if (window.location.pathname === '/500.html') {
  root.innerHTML = htmlPage500
} else if (window.location.pathname === '/login.html') {
  root.innerHTML = htmlLogin
} else if (window.location.pathname === '/register.html') {
  root.innerHTML = htmlRegister
} else if (window.location.pathname === '/profile') {
  root.innerHTML = htmlProfile
}
