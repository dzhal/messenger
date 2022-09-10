// language=hbs
import './register.css';

export default `
  <div class="register_container">
    <h1 class="register_title">Registration</h1>
      <div class="register_input">
        {{{ inputEmail }}}
        {{{ inputLogin }}}
        {{{ inputFirstName }}}
        {{{ inputSecondName }}}
        {{{ inputPhone }}}
        {{{ inputPassword }}}
        {{{ inputRepeatPassword }}}
      </div>
      <div class="register_buttons">
        <div class="register_button-primary">
          {{{ buttonRegister }}}
        </div>
        <div class="register_button-secondary" onclick="location.href='/login.html'">
          {{{ buttonLogin }}}
        </div>
      </div>
  </div>
`;
