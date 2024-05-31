import Slider from '@react-native-community/slider'
import React, { useState } from 'react'
import { Box, Text } from 'react-native-design-utility'
import { theme } from '../../constants/theme'
import { useProgress } from 'react-native-track-player';
import { usePlayerContext } from '../../contexts/PlayerContext';

export const ProgressSlider:React.FC = () => {
  const { position, buffered, duration } = useProgress()

  const playerContext = usePlayerContext();

  const totalTime = (): string => {
    return buildTime(duration - position);
  }

  const currentTime = (): string => {
    return buildTime(position);
  }

  const buildTime = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
  
    const minutesStr = String(minutes).padStart(2, '0');
    const secondsStr = String(seconds).padStart(2, '0');
  
    if (hours > 0) {
      return `${hours}:${minutesStr}:${secondsStr}`;
    }
  
    return `${minutesStr}:${secondsStr}`;
  }

  return (
    <>
      <Slider
        style={{ width: '100%', height: 20 }}
        minimumValue={0}
        maximumValue={duration}
        value={buffered}
        onSlidingComplete={(value) => {
          playerContext.goTo(value)
        }}
        minimumTrackTintColor={theme.color.blueLight}
        maximumTrackTintColor={`${theme.color.blueLight}80`}
      />
      <Box dir="row" align="center" justify="between" mx={15}>
        <Text size={'xs'}>{currentTime()}</Text>
        <Text size={'xs'}>-{totalTime()}</Text>
      </Box>
    </>
  )
}
