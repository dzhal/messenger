// language=hbs
import './profile.css';

export default `
  <div class="profile_container">
    
    <div class="profile_avatar">
      {{ avatar }}
      {{ name }}
    </div>
    <div class="profile_data">
      {{ inputEmail }}
      {{ inputLogin }}
      {{ inputFirstName }}
      {{ inputSecondName }}
      {{ inputChatName }}
      {{ inputPhone }}
    </div>
    <div class="profile_buttons">
      {{ buttonChangeData }}
      {{ buttonPassword }}
      {{ buttonQuit }}
    </div>
  </div>
  <div class="profile_backblock" onclick="location.href='/'">
    <div class="profile_back">
      <img src="{{ back }}" alt="clip">
    </div> 
  </div>
`;
