import { View, Text, ScrollView, StyleSheet } from 'react-native';

const WelcomeScreenMessage = 
  'Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!'
;

export default function WelcomeScreen() {
  return (
    <ScrollView
      indicatorStyle={"white"}
      style = {WelcomeStyles.container}
      >

      <Text 
        style={WelcomeStyles.heading}
        >
        Welcome to Little Lemon
      </Text>

      <Text
          style={WelcomeStyles.message}>
        {WelcomeScreenMessage}
      </Text>
    </ScrollView>
  )
}


const WelcomeStyles = StyleSheet.create({
  container: { flex: 1 },

  heading: { color: '#EDEFEE', //'white'
          padding: 30,
          fontSize: 50, 
          flexWrap: 'wrap',
          textAlign: 'center' },

  message: { padding: 30,
            fontSize: 36,
            marginVertical: 8,
            color: '#EDEFEE',
            textAlign: 'center',
          },
});