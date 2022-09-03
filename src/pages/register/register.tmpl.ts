// language=hbs
import './register.css';

export const registerTemplate = `
  <div class="register_container">
    <h1 class="register_title">Registration</h1>
    <div class="register_input">
      {{> input type="text" name="email" placeholder="Email" }}
      {{> input type="text" name="login" placeholder="Login" }}
      {{> input type="text" name="first_name" placeholder="Name" }}
      {{> input type="text" name="second_name" placeholder="Surname" }}
      {{> input type="phone" name="phone" placeholder="Phone number" }}
      {{> input type="password" name="password" placeholder="Password" }}
      {{> input type="password" name="password-repeat" placeholder="Password (repeat)" }}
    </div>
    <div class="register_buttons">
      <div class="register_button-primary">
        {{> button type="submit" style="primary" text="Register" }}
      </div>
      <div class="register_button-secondary" onclick="location.href='/login.html'">
        {{> button type="button" style="secondary" text="Sign in" }}
      </div>
    </div>
  </div>
`;
