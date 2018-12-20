# @polkadot.{js} React Native (via react-native cli)

A very basic template pulling in the https://github.com/polkadot-js/api libs and using it to display an ever-increasing block number via subscription. https://www.youtube.com/watch?v=Ud8-3VaC6fQ

The versions used here, via `react-native --version` -

```
react-native-cli: 2.0.1
react-native: 0.57.8
```

Project setup -

- Project created via `react-native init pjsrnrncli`
- @polkadot/api added `yarn add @polkadot/api`
- runtime libs for compat, `yarn add node-libs-react-native`
- `metro.config.js` added in root to include compat libs

Project code -

- `index.js` adapted to import `node-libs-react-native/globals` first
- `App.js` edited to display the current blockNumber

Running iOS emulator -

- `react-native start` called in one terminal window
- `react-native run-ios` called in another terminal window to launch the simulator
- ... some waiting... (intial build)

Additional config for Android -

- Update to latest gradle in `android/gradle/gradle-wrapper.properties`
- Update bundle to reflect new version, commenting wrapper
- `react-native start` called in one terminal window
- `ANDROID_HOME=<path> PATH=$PATH:$ANDROID_HOME/platform-tools react-native run-android` called to launch simulator
