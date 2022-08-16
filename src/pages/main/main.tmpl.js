import { chatList } from '../../components/chat-list';
import { chat } from '../../components/chat';
import './main.css';

export const mainTemplate = `
  <main class="main_container">
    {{> chatList }}
    {{> chat }}  
  </main>
`;
