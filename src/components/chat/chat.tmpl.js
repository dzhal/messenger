import './chat.css';
import { avatar } from '../../components/avatar';
import clip from '../../assets/images/clip.svg';
console.log('clip:', clip);

export const chatTemplate = `
  <div class="chat_container">
    <div class="chat_header">
      {{> avatar }}
      <div class="chat_name">
        Вадим
      </div>
      <div class="chat_menu"></div>
    </div>
    <div class="chat_conversation">
      <div class="message">
        Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. 
        Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.
      </div>
      <div class="message-user">
        Супер! Посмотрю позже
      </div>
      <div class="message-user">
        <a href="/404.html">Page 404</a>
      </div>
    </div>
    <div class="chat_inputarea">
      <img src="{{clip}}" alt="clip">
      <input class="chat_input" type="text" placeholder="Сообщение">
      <button class="chat_send"><img src="{{send}}" alt="send"></button>
    </div>
  </div>
`;
