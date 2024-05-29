import 'react-native-gesture-handler'
import * as React from 'react';
import { Box } from 'react-native-design-utility';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigation from './src/navigators/MainStackNavigation';
import { UtilityThemeProvider } from 'react-native-design-utility';
import { theme } from './src/constants/theme';
import { client } from './src/components/graphql/client';
import { ApolloProvider } from '@apollo/client';
import TrackPlayer, { Capability } from 'react-native-track-player';
import { ActivityIndicator } from 'react-native';
import { PlayerContextProvider } from './src/contexts/PlayerContext';

const App = () => {
  const [isReady, setIsReady] = React.useState<boolean>(false);

  const setUpTrackPlayer = async () => {
    await TrackPlayer.setupPlayer()
    TrackPlayer.updateOptions({
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.JumpForward,
        Capability.JumpBackward,
        Capability.Stop,
        Capability.SeekTo
      ],
      forwardJumpInterval: 40
    })
    setIsReady(true);
  }
  React.useEffect(() => {
    setUpTrackPlayer()
  }, [])

  return (
    <UtilityThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        {isReady ?
          <PlayerContextProvider>
            <NavigationContainer>
              <MainStackNavigation />
            </NavigationContainer>
          </PlayerContextProvider>
          :
          <Box f={1} center>
            <ActivityIndicator
              size={'large'}
              color={'red'}
            />
          </Box>
        }
      </ApolloProvider>
    </UtilityThemeProvider>
  );
}

export default App;