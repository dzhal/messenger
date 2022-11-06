import template from './input.tmpl';
import Handlebars from 'handlebars';
import Block from '../../utils/block';
import { TProps } from '../../utils/types';
import { valid } from '../../utils/validateHelpers';

export default class Input extends Block {
  constructor(props: TProps) {
    super({
      ...props,
      events: {
        blur: () => this.onBlur(this.props.rules),
        focus: () => this.onFocus(),
      },
    });
  }

  public enable() {
    (this.element as HTMLInputElement).disabled = false;
  }

  public getName() {
    return (this.element as HTMLInputElement).name;
  }

  public getValue() {
    return (this.element as HTMLInputElement).value;
  }

  public onBlur(rule: (str: string) => boolean) {
    const input = this.element as HTMLInputElement;
    if (input.name === 'message') return;
    const isValid = valid(() => input.value, rule);

    if (!isValid) {
      input.classList.add('invalid');
      const error = input.parentNode?.querySelector('.input_error');
      if (error) {
        error.textContent = `Enter correct ${input.name}`;
      }
    }
  }

  public onFocus() {
    const input = this.element as HTMLInputElement;
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
