import Page404 from '../components/404';

const template = [new Page404({}).render()].join();

document.getElementById('root')!.innerHTML = template;
