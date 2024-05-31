import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, Text } from 'react-native-design-utility';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { theme } from '../../constants/theme';
import RNTrackPlayer, { Track } from 'react-native-track-player';
import { makeHitSlop } from '../../constants/metrics';
import { usePlayerContext } from '../../contexts/PlayerContext';

const QueueScreen = () => {
  const [queue, setQueue] = React.useState<Track[]>([]);
  const playerContext = usePlayerContext();
  const navigation = useNavigation();

  const getQueue = async () => {
    const tracks = await RNTrackPlayer.getQueue();
    setQueue(tracks);
  };

  useFocusEffect(
    React.useCallback(() => {
      getQueue();
    }, []),
  );

  return (
    <SafeAreaView style={s.safeArea}>
      <Box px="md" dir="row" align="center" justify="between" mb="lg">
        <Box f={1}>
          <TouchableOpacity
            onPress={navigation.goBack}
            hitSlop={makeHitSlop(20)}>
            <Text>Done</Text>
          </TouchableOpacity>
        </Box>
        <Box f={1} center>
          <Text bold>Up Next</Text>
        </Box>
        <Box f={1} />
      </Box>

      <ScrollView>
        {queue.map((track, ind) => (
          <View key={ind}>
            <TouchableOpacity
              key={track.id}
              onPress={async () => {
                await playerContext.play(track);
                navigation.goBack();
              }}>
              <Box h={90} px="md" dir="row" key={track.id}>
                <Box h={70} w={70} radius={10} bg="blue" mr={10}>
                  {track.artwork && (
                    <Image
                      source={{ uri: track.artwork }}
                      style={{
                        height: 70,
                        width: 70,
                        borderRadius: 10,
                      }}
                    />
                  )}
                </Box>
                <Box f={1}>
                  <Text bold numberOfLines={1}>
                    {track.title}
                  </Text>
                  <Text size="sm" color="gray">
                    {track.artist}
                  </Text>
                </Box>
              </Box>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.color.white,
  },
});

export default QueueScreen;