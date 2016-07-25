(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = detect;
var keyStringMap = {
  8: "BackSpace",
  9: "Tab",
  13: "Return",
  27: "Esc",
  32: "Space",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "Left",
  38: "Up",
  39: "Right",
  40: "Down",
  45: "Insert",
  46: "Delete",
  48: "0",
  49: "1",
  50: "2",
  51: "3",
  52: "4",
  53: "5",
  54: "6",
  55: "7",
  56: "8",
  57: "9",
  65: "A",
  66: "B",
  67: "C",
  68: "D",
  69: "E",
  70: "F",
  71: "G",
  72: "H",
  73: "I",
  74: "J",
  75: "K",
  76: "L",
  77: "M",
  78: "N",
  79: "O",
  80: "P",
  81: "Q",
  82: "R",
  83: "S",
  84: "T",
  85: "U",
  86: "V",
  87: "W",
  88: "X",
  89: "Y",
  90: "Z",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12"
};

/**
 * @param event {KeyboardEvent}
 * @returns {String}
 */
function detect(event) {
  var keyString = "";
  if (event.shiftKey) {
    keyString = "Shift+" + keyString;
  }
  if (event.ctrlKey) {
    keyString = "Ctrl+" + keyString;
  }
  if (event.altKey) {
    keyString = "Alt+" + keyString;
  }
  if (event.metaKey) {
    keyString = "Meta+" + keyString;
  }
  keyString += keyStringMap[event.keyCode] || "Unknown";
  return keyString;
}

exports.keyStringMap = keyStringMap;

},{}]},{},[1]);
