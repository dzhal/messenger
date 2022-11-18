import Button from './index';
import { expect } from 'chai';

describe('Testing component Button', () => {
  const button = new Button({
    type: 'primary',
    className: 'hello',
    text: 'some text',
  });

  it('Nodename button', () => {
    expect(button.getContent().nodeName).to.eq('BUTTON');
  });
  it('Correct text props', () => {
    expect(button.getContent().textContent).to.eq('some text');
  });
});
