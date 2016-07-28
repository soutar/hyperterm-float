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
    'hyperterm-summon'
  ]
}
```
