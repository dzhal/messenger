import Page404 from '../components/404';

const fragment = new Page404({});

document.getElementById('root')?.append(fragment.getContent());
