import Page500 from '../components/500';

const template = [new Page500({}).render()].join();

document.getElementById('root')!.innerHTML = template;
