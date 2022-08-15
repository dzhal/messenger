import { chatList } from '../../modules/chat-list';
import { chat } from '../../modules/chat';
import './main.css';

export const mainTemplate = `
  <div class="main_container">
    {{> chatList }}
    {{> chat }}  
  </div>
`;
