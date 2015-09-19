# key-string
Detect keyboard event type from KeyboardEvent.

## Install
```sh
npm install key-string
```

## Usage
```js
import KeyStringDetector from 'key-string'

const detector = new KeyStringDetector();
detector.detect(event); //=> "Alt+Ctrl+Return"
```

### Import
Import in your favorite style.

```js
// Pattern 1: Using a default export
import KeyStringDetector from 'key-string'

// Pattern 2: Using named exports
import { KeyStringDetector, keyStringMap } from 'key-string'

// Pattern 3: Using both a default export and named exports
import KeyStringDetector, { keyStringMap } from 'key-string'
```

### Example
```js
import { KeyStringDetector } from 'key-string'

const detector = new KeyStringDetector();

document.addEventListener('keydown', (event) => {
  console.log(detector.detect(event));
});
```

### For more details
- [Key mapping](https://github.com/r7kamura/key-string/blob/master/src/key-string-map.js)
- [Test cases](https://github.com/r7kamura/key-string/blob/master/test/key-string-detector.test.js)

## For contributors
```sh
# Set up
npm install

# Compile JavaScript files
npm run compile

# Watch changes of JavaScript files
npm run watch

# Run tests
npm run test
```

## Inspired by
- [cho45/keyString.js](https://github.com/cho45/keyString.js)
- [electron/accelerator](https://github.com/atom/electron/blob/7bb9595b81953da359aa6502a21b7fd72c07f92a/docs/api/accelerator.md)
