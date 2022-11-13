// language=hbs
import './chat-list.css';
import '../chat-short/chat-short.css';

export default `
  <section class='chatList_container'>
    {{{ button }}}
    {{{ search }}}
    <form class="add_chat">
      {{{ inputChatName }}}
      {{{ buttonAddChat }}}
    </form>
    {{#each chats}}
      {{{ this }}}
    {{/each}}

  </section>  
`;
