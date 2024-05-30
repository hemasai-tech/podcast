import React, { PropsWithChildren, ReactNode } from "react";
import RNTrackPlayer, {
  Track, State as TrackPlayerState, Event
} from "react-native-track-player";

interface PlayerContextType {
  isPlaying: boolean;
  isPaused: boolean;
  isStopped: boolean;
  isEmpty: boolean;
  currentTrack: Track | null;
  play: (track?: Track) => void;
  pause: () => void;
}

// Define the props for the component
interface PlayerContextProviderProps {
  children: ReactNode;
}

export const PlayerContext = React.createContext<PlayerContextType>({
  isPlaying: false,
  isPaused: false,
  isStopped: false,
  isEmpty: false,
  currentTrack: null,
  play: () => null,
  pause: () => null
})

export const PlayerContextProvider: React.FC<PlayerContextProviderProps> = (props: PropsWithChildren<{}>) => {
  const [playerState, setPlayerState] = React.useState<null | TrackPlayerState>(null);
  const [currentTrack, setCurrentTrack] = React.useState<null | Track>(null);

  React.useEffect(() => {
    const listener = RNTrackPlayer.addEventListener(
      Event.PlaybackState,
      ({ state }: { state: TrackPlayerState }) => {
        setPlayerState(state)
      }
    )
    return () => {
      listener.remove();
    }
  }, [])

  const play = async (track?: Track) => {
    if (!track) {
      if (currentTrack) {
        await RNTrackPlayer.play();
      }
      return;
    }

    await RNTrackPlayer.add([track]);
    setCurrentTrack(track);
    await RNTrackPlayer.play();
  };

  const pause = async () => {
    await RNTrackPlayer.pause();
  }

  console.log(TrackPlayerState.Playing,'TrackPlayerState.Playing');
  

  const value: PlayerContextType = {
    isPlaying: playerState === TrackPlayerState.Playing,
    isPaused: playerState === TrackPlayerState.Paused,
    isStopped: playerState === TrackPlayerState.Stopped,
    isEmpty: playerState === null,
    currentTrack,
    pause,
    play,
  }

  return (
    <PlayerContext.Provider value={value}>{props.children}</PlayerContext.Provider>
  )
}

export const usePlayerContext = () => React.useContext(PlayerContext)