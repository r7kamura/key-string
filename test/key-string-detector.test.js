import assert from "assert";
import detect from "../src/key-string";

describe("detect", () => {
  it("detects Return", () => {
    assert.equal(
      detect({ keyCode: 13 }),
      "Return"
    );
  });

  it("detects Alt+Return", () => {
    assert.equal(
      detect({ altKey: true, keyCode: 13 }),
      "Alt+Return"
    );
  });

  it("detects Alt+Ctrl+Return", () => {
    assert.equal(
      detect({ altKey: true, ctrlKey: true, keyCode: 13 }),
      "Alt+Ctrl+Return"
    );
  });

  it("detects Alt+Ctrl+Shift+Return", () => {
    assert.equal(
      detect({ altKey: true, ctrlKey: true, shiftKey: true, keyCode: 13 }),
      "Alt+Ctrl+Shift+Return"
    );
  });

  it("detects Meta+Return", () => {
    assert.equal(
      detect({ metaKey: true, keyCode: 13 }),
      "Meta+Return"
    );
  });

  it("detects Unknown", () => {
    assert.equal(
      detect({ keyCode: 0 }),
      "Unknown"
    );
  });
});
