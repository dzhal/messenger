// language=hbs
import './chat-list.css';

export default `
  <section class='chatList_container'>
    <div class="chatList_header">
      <a href="/profile">Profile ></a>
    </div>
    {{> search }}
    {{> chatShort name="Vitalya" text="hello" time="11:00" count="1" }}
    {{> chatShort name="Андрей" text="Picture" time="10:49" count="2" }}
    {{> chatShort name="Ivan" text="kak dela?" time="12:00" count="10" }}  
  </section>  
`;
