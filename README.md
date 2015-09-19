# key-string
Detect keyboard event type from KeyboardEvent.

## Install
```sh
npm install key-string
```

## Usage
```js
import { KeyStringDetector } from 'key-string'

const detector = new KeyStringDetector();
detector.detect(event); //=> "Alt+Ctrl+Return"
```

### Import
Import in your favorite styles.

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

document.body.addEventListener('keydown', (event) => {
  console.log(detector.detect(event));
});
```

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
