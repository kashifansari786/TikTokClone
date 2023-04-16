import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  UIContainer: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  rightContainer: {
    alignSelf: 'flex-end',
    height: 300,
    justifyContent: 'space-between',
  },
  bottomContainer: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'flex-end',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  somgImage: {
    width: 35,
    height: 35,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  statusLabel: {
    color: '#fff',
    alignSelf: 'center',
  },
  userHandle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 5,
  },
  discription: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 300,
    marginBottom: 5,
  },
  songName: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },
  musicalRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePictureContainer: {},
});
export default styles;
