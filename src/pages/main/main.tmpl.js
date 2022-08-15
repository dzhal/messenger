import { chatList } from '../../components/chat-list';
import { chat } from '../../components/chat';
import './main.css';

export const mainTemplate = `
  <div class="main_container">
    {{> chatList }}
    {{> chat }}  
  </div>
`;
