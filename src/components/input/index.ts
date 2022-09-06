import template from './input.tmpl';
import Handlebars from 'handlebars';
import Block from '../../utils/block';
import { TProps } from '../../utils/types';
import { validateInput } from '../../utils/validateInput';

export default class Input extends Block {
  constructor(props: TProps) {
    super('div', {
      ...props,
      events: {
        blur: () => this.onBlur(),
        focus: () => this.onFocus(),
      },
    });
  }

  public onBlur() {
    const input = this._element as HTMLInputElement;
    if (!validateInput(input.name, input.value)) {
      input.classList.add('invalid');
      const error = input.parentNode?.querySelector('.input_error');
      if (error) {
        error.textContent = `Enter correct ${input.name}`;
      }
    }
  }

  public onFocus() {
    const input = this._element as HTMLInputElement;
    if (input.classList.contains('invalid')) {
      input.classList.remove('invalid');
      const error = input.parentNode?.querySelector('.input_error');
      if (error) {
        error.textContent = '';
      }
    }
  }

  public render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
