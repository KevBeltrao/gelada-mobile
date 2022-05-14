import React from 'react';
import { StyleSheet, View } from 'react-native';

import Home from './src/views/pages/Home';

// ============= THIS FILE IS A GITHUB INTEGRATION TO BE USED AS AN EXAMPLE ===========
import GithubUserProvider from './src/application/githubUserProvider';
import AppThemeProvider from './src/views/theme';

export default function App() {
  return (
    <AppThemeProvider>
      <View style={styles.container}>
        <GithubUserProvider>
          <Home />
        </GithubUserProvider>
      </View>
    </AppThemeProvider>
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
