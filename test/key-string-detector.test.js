import assert from "assert";
import { detectKeyString } from "../src/index";

describe("detect", () => {
  it("detects Return", () => {
    assert.equal(
      detectKeyString({ keyCode: 13 }),
      "Return"
    );
  });

  it("detects Alt+Return", () => {
    assert.equal(
      detectKeyString({ altKey: true, keyCode: 13 }),
      "Alt+Return"
    );
  });

  it("detects Alt+Ctrl+Return", () => {
    assert.equal(
      detectKeyString({ altKey: true, ctrlKey: true, keyCode: 13 }),
      "Alt+Ctrl+Return"
    );
  });

  it("detects Alt+Ctrl+Shift+Return", () => {
    assert.equal(
      detectKeyString({ altKey: true, ctrlKey: true, shiftKey: true, keyCode: 13 }),
      "Alt+Ctrl+Shift+Return"
    );
  });

  it("detects Meta+Return", () => {
    assert.equal(
      detectKeyString({ metaKey: true, keyCode: 13 }),
      "Meta+Return"
    );
  });

  it("detects Unknown", () => {
    assert.equal(
      detectKeyString({ keyCode: 0 }),
      "Unknown"
    );
  });
});
