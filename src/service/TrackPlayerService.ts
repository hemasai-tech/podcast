import TrackPlayer, { Event } from 'react-native-track-player';

module.exports  = async function () {
  TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());
  TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());
  TrackPlayer.addEventListener(Event.PlaybackState,(state)=>{
    console.log(state);
  })
  TrackPlayer.addEventListener(Event.RemoteJumpBackward,async ({interval} : {interval:number})=>{
    const position =  await TrackPlayer.getProgress().then((progress) => progress.position)
    await TrackPlayer.seekTo(position + interval)
  })
  TrackPlayer.addEventListener(Event.RemoteJumpForward,async ({interval} : {interval:number})=>{
    const position =  await TrackPlayer.getProgress().then((progress) => progress.position)
    await TrackPlayer.seekTo(position - interval)
  })
};