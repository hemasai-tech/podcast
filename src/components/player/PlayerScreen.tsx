import React from 'react'
import { Box, Text } from 'react-native-design-utility'
import Icon from 'react-native-vector-icons/Feather';

import { usePlayerContext } from '../../contexts/PlayerContext';
import { Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../constants/theme';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ProgressSlider } from './ProgressSlider';
import { makeHitSlop } from '../../constants/metrics';
import { SearchStackRouteParamsList } from '../../navigators/types';

const { width } = Dimensions.get('window')
const PlayerScreen = () => {
  const navigation = useNavigation<NavigationProp<SearchStackRouteParamsList>>();
  const playerContext = usePlayerContext();
  const track = playerContext.currentTrack;

  if (!track) {
    return null
  }

  return (
    <Box f={1} bg='white' pt={'md'}>
      <Box px="md" mb="md" dir="row" align="center" justify="between">
        <TouchableOpacity
          onPress={navigation.goBack}
          hitSlop={makeHitSlop(20)}>
          <Icon name="chevron-down" size={30} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Queue')}
          hitSlop={makeHitSlop(20)}>
          <Icon name="list" size={30} />
        </TouchableOpacity>
      </Box>
      <Box center>
        <Image source={{ uri: track.artwork }} style={s.image} />
      </Box>
      <Box center>
        <Text center bold m={'sm'}>
          {track.title}
        </Text>
        <Text color='grey' size={'sm'}>
          {track.artist}
        </Text>
      </Box>

      <ProgressSlider

      />

      <Box dir="row" align="center" justify="center">
        <Box>
          <TouchableOpacity onPress={() => playerContext.seekTo(-10)}>
            <Icon name="rotate-ccw" size={30} />
          </TouchableOpacity>
        </Box>
        <Box mx={20}>
          {playerContext.isPaused ? (
            <TouchableOpacity onPress={() => playerContext.play()}>
              <Icon name="play" size={50} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={playerContext.pause}>
              <Icon name="pause" size={50} />
            </TouchableOpacity>
          )}
        </Box>
        <Box>
          <TouchableOpacity onPress={() => playerContext.seekTo()}>
            <Icon name="rotate-cw" size={30} />
          </TouchableOpacity>
        </Box>
      </Box>
    </Box>
  )
}

export default PlayerScreen

const s = StyleSheet.create({
  image: {
    height: width - theme.space.md * 2,
    width: width - theme.space.md * 2,
    borderRadius: 20,
  }
})