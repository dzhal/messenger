// language=hbs
import './input.css'

export default `
  <div class="input input_group">
    <input 
            type="{{ type }}" 
            name="{{ name }}" 
            value="{{ value }}" 
            {{ disabled }} 
            required>
    <span class="input input_highlight"></span>
    <span class="input input_bar"></span>
    <label>{{ placeholder }}</label>
  </div>
`
