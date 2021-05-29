import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
// import ActionButton from 'react-native-action-button';
// import Icon from 'react-native-vector-icons/Ionicons';
// import ImagePicker from 'react-native-image-crop-picker';

// import storage from '@react-native-firebase/storage';
// import firestore from '@react-native-firebase/firestore';

// import {
//   InputField,
//   InputWrapper,
//   AddImage,
//   SubmitBtn,
//   SubmitBtnText,
//   StatusWrapper,
// } from '../styles/AddPost';

import { AuthContext } from '../navigation/AuthProvider';

const AddPostScreen = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Add Post Screen</Text>
    </View>
  );
};

export default AddPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
