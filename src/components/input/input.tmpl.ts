import './input.css';

export default `
    <input 
      type = "{{ type }}" 
      name = "{{ name }}" 
      value = "{{ value }}" 
      class = "{{ className }}"
      placeholder = "{{ placeholder }}" 
      {{ disabled }}
      required>
`;
