// language=hbs
import './chat-menu.css';

export default `
    <div class="chat_menu">
        <ul class="submenu" style="display: none;">
            <li id="add_user">{{{ addUserButton }}}</li>
            <li id="remove_user">{{{ removeUserButton }}}</li>
            <li id="remove_chat">{{{ removeButton }}}</li>
        </ul>
    </div>
`;
