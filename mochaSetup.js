// eslint-disable-next-line @typescript-eslint/no-var-requires
const { JSDOM } = require('jsdom');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Handlebars = require('handlebars');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const { window } = new JSDOM('<div id="app"></div>', {
  url: 'http://localhost:3000',
});

global.window = window;
global.document = window.document;
global.DocumentFragment = window.DocumentFragment;

require.extensions['.tmpl.ts'] = function (module, filename) {
  const contents = fs.readFileSync(filename, 'utf-8');

  module.exports = Handlebars.compile(contents);
};

require.extensions['.scss'] = function () {
  module.exports = () => ({});
};