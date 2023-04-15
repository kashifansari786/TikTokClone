import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import Video from 'react-native-video';
import styles from './styles';

const Post = () => {
  const [pauseed, setPaused] = useState(false);

  const onPlayPausePress = () => {
    setPaused(!pauseed);
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <Video
          source={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
          }}
          style={styles.video}
          resizeMode={'cover'}
          repeat={true}
          paused={pauseed}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};
export default Post;
