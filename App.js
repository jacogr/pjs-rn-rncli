/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Api from '@polkadot/api/promise';
import WsProvider from '@polkadot/rpc-provider/ws';
import { BlockNumber } from '@polkadot/types';

type Props = {};
type State = {
  blockNumber?: BlockNumber
};

const ENDPOINT = 'wss://substrate-rpc.parity.io';

export default class App extends Component<Props> {
  state = {};

  componentDidMount () {
    (async () => {
      const provider = new WsProvider(ENDPOINT);
      const api = await Api.create(provider);

      api.rpc.chain.subscribeNewHead((block) => {
        if (block && block.blockNumber) {
          this.setState({
            blockNumber: block.blockNumber
          });
        }
      });
    })();
  }

  render() {
    const { blockNumber } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Current block</Text>
        <Text style={styles.instructions}>#{(blockNumber || '-').toString()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
