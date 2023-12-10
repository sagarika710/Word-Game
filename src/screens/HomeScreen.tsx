import React from 'react';
import {View, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button
        title="Start Game"
        onPress={() => navigation.navigate('WordPuzzleGame')}
      />
      <Button
        title="Leaderboard"
        onPress={() => navigation.navigate('Leaderboard')}
      />
    </View>
  );
};

export default HomeScreen;
