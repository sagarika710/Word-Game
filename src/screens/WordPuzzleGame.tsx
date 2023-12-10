import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import CategorySelection from '../components/CategorySelection';

const WordPuzzleGame = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const startGame = () => {
    if (selectedCategory) {

      navigation.navigate('GameScreen', {category: selectedCategory});
    } else {
  
    }
  };

  return (
    <View>
      <CategorySelection onSelectCategory={setSelectedCategory} />
      <Button title="Start Game" onPress={startGame} />
    </View>
  );
};

export default WordPuzzleGame;
