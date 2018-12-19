# @polkadot.{js} React Native (via react-native cli)

- Project created via `react-native init pjsrnrncli`
- @polkadot/api added `yarn add @polkadot/api`
- runtime libs for compat, `yarn add node-libs-react-native`
- `metro.config.js` added in root to include compat libs
- `index.js` adapted to import `node-libs-react-native/globals` first
- `App.js` edited to display the current blockNumber
- `react-native start` called in one terminal window
- `react-native run-ios` called in another terminal window
