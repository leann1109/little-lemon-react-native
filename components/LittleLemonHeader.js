import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={HeaderStyles.container}>
      <Text
        style={HeaderStyles.message}>
        Little Lemon
      </Text>
    </View>
  );
}

const HeaderStyles = StyleSheet.create({
  container: { flex: 0.15, 
    backgroundColor: '#EE9972' //'#F4CE14' 
  },

  message: { padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});