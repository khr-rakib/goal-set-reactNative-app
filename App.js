import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import GoalInput from './components/GoalInput';

const App = () => {
  return (
    <SafeAreaView style={{padding: 30}}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <GoalInput/>
      </ScrollView>
    </SafeAreaView>
  );
};


export default App;
