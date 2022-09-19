// language=hbs
import './profile.css';

export default `
<div>
  <div class="profile_container">
    <div class="profile_avatar">
      {{{ avatar }}}
      {{ first_name }}
    </div>
    <div class="profile_data">
      {{{ inputEmail }}}
      {{{ inputLogin }}}
      {{{ inputFirstName }}}
      {{{ inputSecondName }}}
      {{{ inputChatName }}}
      {{{ inputPhone }}}
    </div>
    <div class="profile_buttons">
      {{{ buttonChangeData }}}
      {{{ buttonPassword }}}
      {{{ buttonQuit }}}
    </div>
  </div>
  {{{ backblock }}}
</div>
`;
