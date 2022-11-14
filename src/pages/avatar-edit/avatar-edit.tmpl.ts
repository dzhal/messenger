// language=hbs
import './avatar-edit.css';

export default `
    <form class="avatar_form">
      <input type="file" id="avatar" name="avatar" multiple>
      <div class="profile_buttons">
        {{{ buttonSave }}}
        {{{ buttonCancel }}}
      </div>
    </form>
`;
