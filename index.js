const registerShortcut = require('hyperterm-register-shortcut');
const floatingWindows = new Set([]);
let focusedWindow;

function registerWindow (win) {
  win.on('focus', () => {
    focusedWindow = win;
  });
  win.on('blur', () => {
    if (focusedWindow === win) {
      focusedWindow = undefined;
    }
  })
}

function toggleAlwaysOnTop () {
  if (focusedWindow) {
    if (floatingWindows.has(focusedWindow)) {
      floatingWindows.delete(focusedWindow);
      focusedWindow.setAlwaysOnTop(false);
    } else {
      floatingWindows.add(focusedWindow);
      focusedWindow.setAlwaysOnTop(true);
    }
  }
}

module.exports = {
  onApp: registerShortcut('float', toggleAlwaysOnTop),
  onWindow: registerWindow
}
