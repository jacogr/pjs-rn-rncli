# @polkadot.{js} React Native (via react-native cli)

A very basic template pulling in the https://github.com/polkadot-js/api libs and using it to display an ever-increasing block number via subscription. https://www.youtube.com/watch?v=Ud8-3VaC6fQ

Project setup -

- Project created via `react-native init pjsrnrncli`
- @polkadot/api added `yarn add @polkadot/api`
- runtime libs for compat, `yarn add node-libs-react-native`
- `metro.config.js` added in root to include compat libs

Project code -

- `index.js` adapted to import `node-libs-react-native/globals` first
- `App.js` edited to display the current blockNumber

Running -

- `react-native start` called in one terminal window
- `react-native run-ios` called in another terminal window to launch the simulator
- ... some waiting... (intial build)

The versions used here, via `react-native --version` -

```
react-native-cli: 2.0.1
react-native: 0.57.8
```
