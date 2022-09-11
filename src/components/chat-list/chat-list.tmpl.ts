// language=hbs
import './chat-list.css';

export default `
  <section class='chatList_container'>
    <div class="chatList_header">
      <a href="/settings">Profile ></a>
    </div>
    {{{ search }}}
    {{{ chatShort1 }}}
    {{{ chatShort2 }}}
    {{{ chatShort3 }}} 
  </section>  
`;
