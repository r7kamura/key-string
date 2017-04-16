# key-string

[![npm](https://img.shields.io/npm/v/key-string.svg)](https://www.npmjs.com/package/key-string)
[![Build Status](https://travis-ci.org/r7kamura/key-string.svg?branch=master)](https://travis-ci.org/r7kamura/key-string)

Detect keyboard event type from KeyboardEvent.

## Install

```bash
yarn add key-string
```

## Usage

```js
import detectKeyString from "key-string/detectKeyString"

document.addEventListener("keydown", (event) => {
  console.log(detectKeyString(event)); //=> "Alt+Ctrl+Return"
});
```

## Available Modifiers

- `Alt`
- `Ctrl`
- `Meta`
- `Shift`

## Development

### Set up

```bash
yarn install
```

### Build

```bash
yarn run build
```

### Test

```bash
yarn run test
```

### Publish

```bash
yarn run build
cd dist
npm publish
```

## Inspired by
- [cho45/keyString.js](https://github.com/cho45/keyString.js)
- [electron/accelerator](https://github.com/atom/electron/blob/7bb9595b81953da359aa6502a21b7fd72c07f92a/docs/api/accelerator.md)
