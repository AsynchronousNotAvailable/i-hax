import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import { MaterialIcons } from 'react-native-vector-icons';

const HealthMusic = ({route}) => {
  const { title } = route.params;
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundObject, setSoundObject] = useState(new Audio.Sound());
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    (async () => {
      const status = await soundObject.loadAsync(require('../assets/music.mp3'));
      setDuration(status.durationMillis);

      soundObject.setOnPlaybackStatusUpdate((status) => {
        setPosition(status.positionMillis);
      });
    })();

    return () => {
      soundObject.unloadAsync();
    };
  }, []);

  const togglePlayback = async () => {
    if (isPlaying) {
      await soundObject.pauseAsync();
    } else {
      await soundObject.playAsync();
    }
    setIsPlaying(!isPlaying);
  }

  const onSliderValueChange = (value) => {
    setPosition(value);
  }

  const onSlidingComplete = async (value) => {
    await soundObject.setPositionAsync(value);
  }

  const jumpForward = async () => {
    const newPosition = position + 30000; 
    await soundObject.setPositionAsync(newPosition);
    setPosition(newPosition);
  }

  const jumpBackward = async () => {
    const newPosition = position - 30000; 
    await soundObject.setPositionAsync(newPosition);
    setPosition(newPosition);
  }

  function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  return (
    <View style={{alignItems:'center', backgroundColor:'#F0F2FB',flex: 1 }}>
      <ImageBackground source={require('../assets/musicbg.png')} style={{ width: 400, height: 500, marginTop:-60, marginRight:15,alignItems:'center'}} >
        <Text style={{ fontWeight: 'bold', fontSize: 23, marginTop:420, marginLeft:20}}> {title}</Text>
        <Text style={{ fontSize: 18, color:'gray',marginLeft:20,marginTop:10}}>Relieve Stress</Text>
      </ImageBackground>
      <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:20}}>
      <Text>{`${formatTime(position)}`}</Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={duration}
        value={position}
        onValueChange={onSliderValueChange}
        onSlidingComplete={onSlidingComplete}
      />
      <Text>{`${formatTime(duration)}`}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop:20}}>
      <TouchableOpacity onPress={jumpBackward}>
        <MaterialIcons name="replay-30" size={40} color="black" style={{ marginRight: 20 }}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={togglePlayback}>
        {isPlaying ? (
          <MaterialIcons name="pause" size={40} color="black" style={{ marginHorizontal: 20 }} />
        ) : (
          <MaterialIcons name="play-arrow" size={40} color="black" style={{ marginHorizontal: 20 }}/>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={jumpForward}>
        <MaterialIcons name="forward-30" size={40} color="black" style={{ marginLeft: 20,  }}/>
      </TouchableOpacity>
      </View>
    </View>
  );
}

export default HealthMusic;
