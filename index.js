const fs = require('fs');
const svelte = require('svelte/compiler');
const sourceMapSupport = require('source-map-support');

function convertSvelte(module, filename) {
  const code = fs.readFileSync(filename, "utf-8");
  const result = svelte.compile(code, {
    filename,
    css: false,
    accessors: true,
    dev: true,
    format: 'cjs'
  })

  sourceMapSupport.install({
    environment: 'node',
    retrieveSourceMap: function(source) {
      if (source === filename) {
        return {
          url: filename,
          map: result.js.map
        }
      }
      return null;
    }
  })

  const esInterop = 'Object.defineProperty(exports, "__esModule", { value: true });';

  return module._compile(result.js.code + esInterop, filename);
}

require.extensions['.svelte'] = convertSvelte;
