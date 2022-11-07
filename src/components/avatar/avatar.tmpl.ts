// language=hbs
import './avatar.css';

export default `
  <div class="avatar">
    {{#if avatar}}
      <img class="avatar" src="https://ya-praktikum.tech/api/v2/resources{{avatar}}">
    {{/if}} 
  </div>
`;
