import Block from './block';
import { expect } from 'chai';
import Handlebars from 'handlebars';

describe('Testing class Block', () => {
  class TestBlock extends Block {
    render() {
      return this.compile(
        Handlebars.compile('<div>some text</div>'),
        this.props,
      );
    }
  }

  const testClass = new TestBlock({});

  it('Create typical Block', () => {
    expect(testClass.getContent().textContent).to.eq('some text');
  });

  it('Can update props', () => {
    testClass.setProps({
      id: 123,
    });
    expect(testClass.props.id).to.eq(123);
  });
});
