import {StyleSheet, View} from 'react-native';
import React from 'react';
import Routes from '@/navigation/routes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const App = () => {
  // Access the client
  const queryClient = new QueryClient();
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      {/* Provide the client to your App */}
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default App;
