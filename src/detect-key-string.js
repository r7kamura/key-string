import keyStringMap from "./key-string-map.js";

/**
 * @param event {KeyboardEvent}
 * @returns {String}
 */
export default function detectKeyString(event) {
  let keyString = "";
  if (event.shiftKey) {
    keyString = `Shift+${keyString}`;
  }
  if (event.ctrlKey) {
    keyString = `Ctrl+${keyString}`;
  }
  if (event.altKey) {
    keyString = `Alt+${keyString}`;
  }
  if (event.metaKey) {
    keyString = `Meta+${keyString}`;
  }
  keyString += keyStringMap[event.keyCode] || "Unknown";
  return keyString;
}
