<p>
  <a href="https://www.npmjs.com/package/svelte-test-register">
    <img src="https://img.shields.io/npm/v/svelte-test-register.svg" alt="npm version">
  </a>

  <a href="https://packagephobia.now.sh/result?p=svelte-test-register">
    <img src="https://packagephobia.now.sh/badge?p=svelte-test-register" alt="install size">
  </a>

  <a href="https://travis-ci.org/dirv/svelte-test-register">
    <img src="https://api.travis-ci.org/dirv/svelte-test-register.svg?branch=master"
         alt="build status">
  </a>

  <a href="https://github.com/dirv/svelte-test-register/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/svelte-test-register.svg" alt="license">
  </a>
</p>

# svelte-test-register

If you're using Mocha or Jasmine to run tests against Svelte components, you'll need to configure Node to compile your `.svelte` files. That's what this script does.  It registers Svelte compilation outside of the production Rollup build process.

It also installs source map support so that stack traces map back to the original `.svelte` file.

## Installation

```bash
npm install --save-dev svelte-test-register
```

## Usage with Mocha

In `package.json`, update the Mocha script entry to require `svelte-test-register`:

```json
"scripts": {
  "mocha": "mocha --require svelte-test-register"
}
```


## Usage with Jasmine

In `spec/support/jasmine.json`, update the helpers section to include the `index.js` from the `svelt-test-register` package:

```json
"helpers": [
  "../node_modules/svelte-test-register/index.js"
]
```

## What about Jest?

Jest has a different mechanism for transforming specific files. See [jest-transform-svelte](https://github.com/rspieker/jest-transform-svelte) if you'd like to test Svelte components in Jest.

## Known issues

Source map support does not yet work in Jasmine.

## Contributing

All contributions are welcome. Please feel free to create issues or raise PRs.
