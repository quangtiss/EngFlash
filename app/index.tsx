import { Text, View, StyleSheet } from 'react-native';
import { Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

export const unstable_settings = {
  initialRouteName: 'index',
};

export const screenOptions = {
  headerShown: false,
};


export default function Index() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.text}>Home screen</Text>
    // </View>
      <Onboarding
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/images/logo.png')} />,
          title: '',
          subtitle: '',
        },
          {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/images/onboarding1.png')} />,
            title: 'Hello',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/images/onboarding2.png')} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/images/onboarding3.png')} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
        ]}
      />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#25292e',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: '#fff',
//   },
// });