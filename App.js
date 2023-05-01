import { View, StyleSheet } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';

export default function App() {
  return (
    <>
      <View
        style={ AppStyles.container }>
        <LittleLemonHeader />
        <WelcomeScreen />
     
        <LittleLemonFooter />
      </View>
    </>
  );
}

const AppStyles = StyleSheet.create({
  container: { backgroundColor: '#333333', //'#495E57'
    flex: 1,
  },

});