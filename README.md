# hyperterm-float

Make your HyperTerm windows float on top of other windows. The "always-on-top" state of the currently-focused window will be toggled when your shortcut is pressed.

## Install

1. Add `hyperterm-float` to your plugins array in `~/.hyperterm.js`.
2. Add a `float` entry inside `hotkeys` in the `config` object and set the value to the shortcut you want to use (see [Electron Accelerators](https://github.com/electron/electron/blob/master/docs/api/accelerator.md) for valid shortcuts)

```js

module.exports = {
  config: {
    hotkeys: {
      float: 'Command+Alt+F'
    }
  },
  plugins: [
    'hyperterm-float'
  ]
}
```

Or

```js

module.exports = {
  config: {
    floatShortcut: 'Command+Alt+F'
  },
  plugins: [
    'hyperterm-float'
  ]
}
```

## Valid shortcuts

Valid shortcuts are defined by Electron and are known as **Accelerators**. Accelerators can contain multiple modifiers and key codes, combined by the + character.

Examples:

* `CommandOrControl+A`
* `CommandOrControl+Shift+Z`


#### Available modifiers

* `Command` (or `Cmd` for short)
* `Control` (or `Ctrl` for short)
* `CommandOrControl` (or `CmdOrCtrl` for short)
* `Alt`
* `Option`
* `AltGr`
* `Shift`
* `Super`

#### Available key codes

* `0` to `9`
* `A` to `Z`
* `F1` to `F24`
* Punctuations like `~`, `!`, `@`, `#`, `$`, etc.
* `Plus`
* `Space`
* `Tab`
* `Backspace`
* `Delete`
* `Insert`
* `Return` (or `Enter` as alias)
* `Up`, `Down`, `Left` and `Right`
* `Home` and `End`
* `PageUp` and `PageDown`
* `Escape` (or `Esc` for short)
* `VolumeUp`, `VolumeDown` and `VolumeMute`
* `MediaNextTrack`, `MediaPreviousTrack`, `MediaStop` and `MediaPlayPause`
* `PrintScreen`
