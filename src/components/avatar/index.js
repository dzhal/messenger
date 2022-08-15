// import './avatar.css';
import Handlebars from 'handlebars';
import { avatarTemplate } from './avatar.tmpl';

export const avatar = Handlebars.registerPartial('avatar', avatarTemplate);
