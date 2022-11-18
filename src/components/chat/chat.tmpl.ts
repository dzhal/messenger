// language=hbs
import './chat.css';

export default `
  
  <section class="chat_container">
    {{#if currentChat}}
    {{{ searchUserForm }}}
    <div class="chat_header">
      {{{ avatar }}}
      <div class="chat_name">
        {{ chatName }}
      </div>
      {{{ chatMenu }}}
    </div>
      <div class="chat_conversation">
        {{#if messages}}
          {{#each messages}}
            {{{ this }}}
          {{/each}}
        {{/if}}
      </div>
      <div class="chat_inputarea">
        {{{ imageClip }}}
        {{{ input }}}
        {{{ button }}}
      </div>
    {{/if}}
  </section>
`;
