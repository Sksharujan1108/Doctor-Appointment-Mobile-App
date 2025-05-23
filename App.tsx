/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Routes from '@/navigation/routes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from '@/features/store';

const App = () => {
  // Access the client
  const queryClient = new QueryClient();
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      {/* Provide the client to your App */}
      <QueryClientProvider client={queryClient}>
        <Provider store={store} >
          <Routes />
        </Provider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default App;
