import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import Video from 'react-native-video';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesom from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Post = () => {
  const [pauseed, setPaused] = useState(false);

  const onPlayPausePress = () => {
    setPaused(!pauseed);
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <View>
          <Video
            source={{
              uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            }}
            style={styles.video}
            resizeMode={'cover'}
            repeat={true}
            paused={pauseed}
          />
          <View style={styles.UIContainer}>
            <View style={styles.rightContainer}>
              <Image
                style={styles.profilePicture}
                source={{
                  uri: 'https://media.licdn.com/dms/image/D4D03AQFYUUBfF9Krkg/profile-displayphoto-shrink_800_800/0/1678732156344?e=2147483647&v=beta&t=qK5TT8wnhpgt-ftrh6o6xDAz_MT0BS6q4i5IgZKElXg',
                }}
              />
              <View style={styles.iconContainer}>
                <AntDesign name={'hearto'} size={40} color="white" />
                <Text style={styles.statusLabel}>13</Text>
              </View>
              <View style={styles.iconContainer}>
                <FontAwesom name={'commenting'} size={40} color="white" />
                <Text style={styles.statusLabel}>13</Text>
              </View>
              <View style={styles.iconContainer}>
                <Fontisto name={'share-a'} size={40} color="white" />
                <Text style={styles.statusLabel}>13</Text>
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <View>
                <Text style={styles.userHandle}>@KashifAnsari</Text>
                <Text style={styles.discription}>song by hahah</Text>
                <View style={styles.musicalRow}>
                  <Entypo name={'beamed-note'} size={24} color="white" />
                  <Text style={styles.songName}>nf search</Text>
                </View>
              </View>

              <Image
                style={styles.somgImage}
                source={{
                  uri: 'https://media.licdn.com/dms/image/D4D03AQFYUUBfF9Krkg/profile-displayphoto-shrink_800_800/0/1678732156344?e=2147483647&v=beta&t=qK5TT8wnhpgt-ftrh6o6xDAz_MT0BS6q4i5IgZKElXg',
                }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
export default Post;
