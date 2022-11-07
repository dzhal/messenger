// language=hbs
import './chat-list.css';

export default `
  <section class='chatList_container'>
    {{{ button }}}
    {{{ search }}}

    {{#each chats}}
      {{{ chatShort name=title }}}
    {{/each}}

  </section>  
`;
