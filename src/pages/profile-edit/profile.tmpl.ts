// language=hbs
import './profile.css';

export default `
<div>
  <div class="profile_container">
    <div class="profile_avatar">
      {{{ avatar }}}
      {{ display_name }}
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
      {{{ buttonSave }}}
      {{{ buttonCancel }}}
    </div>
  </div>
  {{{ backblock }}}
</div>
`;
