import 'react-native-gesture-handler'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigation from './src/navigators/MainStackNavigation';
import { UtilityThemeProvider } from 'react-native-design-utility';
import { theme } from './src/constants/theme';
import { client } from './src/components/graphql/client';
import { ApolloProvider } from '@apollo/client';
import TrackPlayer from 'react-native-track-player';

const track = {
  id: '1',
  url:'https://media.transistor.fm/39765eda/0e219b35.mp3',
  title: '141: Jason Fried - Running the Tailwind Business on Basecamp',
  artist: 'Full Stack Radio',
};

function App() {

  React.useEffect(() => {
    (async () => {
      await TrackPlayer.setupPlayer()
      await TrackPlayer.add([track]);

      await TrackPlayer.play();

      setTimeout(() => {
        TrackPlayer.stop();
      }, 7000);
    })()
  }, [])

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