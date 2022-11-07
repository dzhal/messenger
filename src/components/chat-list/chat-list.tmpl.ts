// language=hbs
import './chat-list.css';

export default `
  <section class='chatList_container'>
    {{{ button }}}
    {{{ search }}}
    {{#if chats}}
      {{#each chats}}
        {{{ chatShort name=title }}}
      {{/each}}
    {{else}}
      <div>Cоздать новый чат!</div>
    {{/if}}
  </section>  
`;
