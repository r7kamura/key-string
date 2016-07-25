# key-string [![Build Status](https://travis-ci.org/r7kamura/key-string.svg?branch=master)](https://travis-ci.org/r7kamura/key-string)

Detect keyboard event type from KeyboardEvent.

## Install

```sh
npm install key-string
```

## Usage

```js
import detect from "key-string"
document.addEventListener('keydown', (event) => {
  console.log(detect(event)); //=> "Alt+Ctrl+Return"
});
```

## Development

### Set up

```sh
npm install
```

### Build

```sh
npm run build
```

### Test

```sh
npm run test
```

## Inspired by
- [cho45/keyString.js](https://github.com/cho45/keyString.js)
- [electron/accelerator](https://github.com/atom/electron/blob/7bb9595b81953da359aa6502a21b7fd72c07f92a/docs/api/accelerator.md)
