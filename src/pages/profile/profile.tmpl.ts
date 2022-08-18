// language=hbs
import './profile.css'

export const profileTemplate = `
  <div class="profile_container">
    
    <div class="profile_avatar">
      {{> avatar }}
      Ivan
    </div>
    <div class="profile_data">
      {{> input type="text" name="email" placeholder="Email" value="ivan@gmail.com" disabled="disabled"}}
      {{> input type="text" name="login" placeholder="Login" value="ivanivanov" disabled="disabled" }}
      {{> input type="text" name="first_name" placeholder="Name" value="ivan" disabled="disabled" }}
      {{> input type="text" name="second_name" placeholder="Surname" value="ivanov" disabled="disabled" }}
      {{> input type="text" name="chat_name" placeholder="Chatname" value="ivanishe" disabled="disabled" }}
      {{> input type="phone" name="phone" placeholder="Phone number" value="+7 (909) 967 30 30" disabled="disabled" }}
    </div>
    <div class="profile_buttons">
        {{> button type="button" style="secondary" text="Change data" }}
        {{> button type="button" style="secondary" text="Change password" }}
        {{> button type="button" style="secondary" text="Quit" }}
    </div>
  </div>
  <div class="profile_backblock" onclick="location.href='/'">
    <div class="profile_back">
      <img src="{{back}}" alt="clip">
    </div> 
  </div>
`
