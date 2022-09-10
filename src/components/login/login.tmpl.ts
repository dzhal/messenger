import './login.css';

export default `
  <div class="login_container">
  <h1 class="login_title">Login</h1>
     <div class="login_input">
       {{{ inputLogin }}}
       {{{ inputPassword }}}
      </div>
    <div class="login_buttons">
      <div class="login_button-primary">
        {{{ buttonLogin }}}
      </div>
      <div class="login_button-secondary" onclick="location.href='/register.html'">
        {{{ buttonRegister }}}
      </div>
    </div>
  </div>
`;
