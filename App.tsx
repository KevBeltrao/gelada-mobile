import React from 'react';
import { StyleSheet, View } from 'react-native';

import Home from './src/views/Pages/Home';

// ============= THIS FILE IS A GITHUB INTEGRATION TO BE USED AS AN EXAMPLE ===========
import GithubUserProvider from './src/application/githubUserProvider';

export default function App() {
  return (
    <View style={styles.container}>
      <GithubUserProvider>
        <Home />
      </GithubUserProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
