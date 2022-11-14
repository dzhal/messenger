// language=hbs
import './password-edit.css';

export default `
    <form class="password_form">
      {{{ oldPassword }}}
      {{{ newPassword }}}
      <div class="profile_buttons">
        {{{ buttonSave }}}
        {{{ buttonCancel }}}
      </div>
    </form>
`;
