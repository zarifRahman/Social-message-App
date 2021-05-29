import React from 'react';
import { View, Text, Image, Alert, TouchableOpacity, StyleSheet, Button } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({ navigation }) => {
  const Dots = ({ selected }) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
      <View
        style={{
          width: 6,
          height: 6,
          marginHorizontal: 3,
          backgroundColor
        }}
      />
    );
  }
  const Skip = ({ ...props }) => (
    <TouchableOpacity
      style={{ marginHorizontal: 8 }}
      {...props}
    >
      <Text style={{ fontSize: 16 }}>Skip</Text>
    </TouchableOpacity>
  )
  const Done = ({ ...props }) => (
    <TouchableOpacity
      style={{ marginHorizontal: 8 }}
      {...props}
    >
      <Text style={{ fontSize: 16 }}>Done</Text>
    </TouchableOpacity>
  )
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      // NextButtonComponent
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.navigate("Login")}
      pages={[
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../assets/onboarding-img1.png')} />,
          title: 'Screen 1',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/onboarding-img2.png')} />,
          title: 'Sreen 2',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#a6e4d0',
          image: <Image source={require('../assets/onboarding-img3.png')} />,
          title: 'Screen 3',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  )
}
export default OnboardingScreen;
