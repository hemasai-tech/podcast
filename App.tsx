import 'react-native-gesture-handler'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigation from './src/navigators/MainStackNavigation';
import { UtilityThemeProvider } from 'react-native-design-utility';
import { theme } from './src/constants/theme';
import { client } from './src/components/graphql/client';
import { ApolloProvider } from '@apollo/client';

function App() {
  return (
    <UtilityThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <MainStackNavigation />
        </NavigationContainer>
      </ApolloProvider>
    </UtilityThemeProvider>
  );
}

export default App;