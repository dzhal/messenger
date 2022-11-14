// language=hbs
import './search-user-form.css';

export default `
    <form class="search_form_container">
      <h2>{{ title }}</h2>
      {{{ inputUserName }}}
      {{{ buttonAdd }}}
      <br>
      <br>
      {{{ buttonRemove }}}
    </form>
`;
