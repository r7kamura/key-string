import keyStringMap from './key-string-map'

export default class KeyStringDetector {
  /**
   * @param {KeyboardEvent} event
   * @return {String}
   */
  detect(event)  {
    let keyString = '';
    if (event.shiftKey) {
      keyString = `Shift+${keyString}`;
    }
    if (event.ctrlKey) {
      keyString = `Ctrl+${keyString}`;
    }
    if (event.altKey) {
      keyString = `Alt+${keyString}`;
    }
    keyString += keyStringMap[event.keyCode] || 'Unknown';
    return keyString;
  }
}
