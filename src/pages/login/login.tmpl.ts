import { input } from '../../components/input/index.ts'
import { button } from '../../components/button/index.ts'
import './login.css'

export const loginTemplate = `
  <div class="login_container">
    <h1 class="login_title">Login</h1>
    <div class="login_input">
      {{> input type="text" name="login" placeholder="Username" }}
      {{> input type="password" name="password" placeholder="Password" }}
    </div>
    <div class="login_buttons">
      <div class="login_button-primary">
        {{> button type="submit" style="primary" text="Sign in" }}
      </div>
      <div class="login_button-secondary" onclick="location.href='/register.html'">
        {{> button type="button" style="secondary" text="Register" }}
      </div>
    </div>
  </div>
`
