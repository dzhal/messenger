import './chat-list.css';
import { search } from '../../components/search';
import { avatar } from '../../components/avatar';

export const chatListTemplate = `
  <section class='chatList_container'>
    <div class="chatlist_header">
      <a href="profile">Profile ></a>
    </div>
    {{> search }}
    <div class="chatShort">
      {{> avatar }}
      <div class="chatInfo">
        <div class="chatName">
          Андрей
        </div>
        <div class="content">
          Picture
        </div>
        <div class="time">
          10:49
        </div>
        <div class="count">
          2
        </div>
      </div>
    </div>
    <div class="chatShort">
      <div class="avatar">
        
      </div>
      <div class="chatInfo">
        <div class="chatName">
          Андрей
        </div>
        <div class="content">
          Picture
        </div>
        <div class="time">
          10:49
        </div>
        <div class="count">
          2
        </div>
      </div>
    </div>   
  </section>  
`;
