import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import User from './pages/userp';
import Feed from './pages/scrollp';

export default function App() {
  return (
    <View>
      <Feed/>
      {/* <User/> */}
    </View>
  );
}

const styles = StyleSheet.create({

});
