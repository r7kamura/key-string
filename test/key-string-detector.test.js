import assert from 'assert'
import KeyStringDetector from '../lib/index.js'

describe('KeyStringDetector', () => {
  const detector = new KeyStringDetector();

  describe('#detect', () => {
    it('detects Return', () => {
      assert.equal(
        detector.detect({ keyCode: 13 }),
        'Return'
      );
    });

    it('detects Alt+Return', () => {
      assert.equal(
        detector.detect({ altKey: true, keyCode: 13 }),
        'Alt+Return'
      );
    });

    it('detects Alt+Ctrl+Return', () => {
      assert.equal(
        detector.detect({ altKey: true, ctrlKey: true, keyCode: 13 }),
        'Alt+Ctrl+Return'
      );
    });

    it('detects Alt+Ctrl+Shift+Return', () => {
      assert.equal(
        detector.detect({ altKey: true, ctrlKey: true, shiftKey: true, keyCode: 13 }),
        'Alt+Ctrl+Shift+Return'
      );
    });

    it('detects Unknown', () => {
      assert.equal(
        detector.detect({ keyCode: 0 }),
        'Unknown'
      );
    });
  });
});
