import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View style={FooterStyles.container}>
      <Text
        style={FooterStyles.message}>
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View>
  );
}

const FooterStyles = StyleSheet.create ({
  container: { backgroundColor: '#EE9972', //'#F4CE14', 
    marginbottom: 10, 
  },

  message: { fontSize: 18,
    color: 'black',
    textAlign: 'center',
    fontStyle: 'italic',
  },

});