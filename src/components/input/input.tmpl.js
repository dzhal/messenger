import './input.css';

export const inputTemplate = `
  <div class="input_group">
    <input type="{{ type }}" name="{{ name }}" value="{{ value }}" {{ disabled}} " required>
    <span class="input_highlight"></span>
    <span class="input_bar"></span>
    <label>{{ placeholder }}</label>
  </div>
`;
