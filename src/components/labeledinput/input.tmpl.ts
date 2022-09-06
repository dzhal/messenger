// language=hbs
import './input.css';

export default `
  <div class="input input_group">
    {{{ input }}}
    <div class="input_error"></div>
    <span class="input input_highlight"></span>
    <span class="input input_bar"></span>
    <label>{{ placeholder }}</label>
  </div>
`;
