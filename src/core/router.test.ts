import { expect } from 'chai';
import router from './router';
import Handlebars from 'handlebars';
import Block from './block';

describe('Testing Router', () => {
  class TestBlock extends Block {
    render() {
      return this.compile(
        Handlebars.compile('<div>some text</div>'),
        this.props,
      );
    }
  }

  it('use() should return Router instance', () => {
    const result = router.use('/', TestBlock);
    expect(result).to.eq(router);
  });
});
