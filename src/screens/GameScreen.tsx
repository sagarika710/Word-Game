

import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';

const GameScreen = ({route}) => {
  const {category} = route.params;
  const [wordList, setWordList] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [scrambledWord, setScrambledWord] = useState('');
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
  
    const fetchWordList = async () => {
      const categoryWordList = await fetchWordListByCategory(category);
      setWordList(categoryWordList);


      if (categoryWordList.length > 0) {
        updateScrambledWord(0);
      }
    };

    fetchWordList();
  }, [category]);

  useEffect(() => {
    
    if (wordList.length > 0) {
      updateScrambledWord(currentWordIndex);
    }
  }, [currentWordIndex, wordList]);

  const fetchWordListByCategory = async selectedCategory => {

    switch (selectedCategory) {
      case 'Animals':
        return ['lion', 'elephant', 'giraffe'];
      case 'Countries':
        return ['usa', 'canada', 'france'];
      case 'Fruits':
        return ['apple', 'banana', 'orange'];
      default:
        return [];
    }
  };

  const updateScrambledWord = index => {
    const currentWord = wordList[index];
    const scrambled = scrambleWord(currentWord);
    setScrambledWord(scrambled);
  };

  const scrambleWord = word => {
    const shuffledWord = word
      .split('')
      .sort(() => 0.5 - Math.random())
      .join('');
    return shuffledWord;
  };

  const checkWord = () => {
    if (wordList.length === 0 || !scrambledWord) {
 
      return;
    }

    const currentWord = wordList[currentWordIndex];

    if (userInput.toLowerCase() === currentWord) {
 
      const wordScore = currentWord.length * 10;
      setScore(score + wordScore);

 
      const nextWordIndex = (currentWordIndex + 1) % wordList.length;
      setCurrentWordIndex(nextWordIndex);


      setUserInput('');
    } else {
    Alert.alert('Sorry Wrong Word !!!')


    }
  };

  const skipWord = () => {
    if (wordList.length === 0) {
   
      return;
    }

 
    const nextWordIndex = (currentWordIndex + 1) % wordList.length;
    setCurrentWordIndex(nextWordIndex);

    updateScrambledWord(nextWordIndex);

    setUserInput('');
  };

  return (
    <View>
      <Text>Category: {category}</Text>
      <Text>Score: {score}</Text>
      {!!scrambledWord && <Text>Unscramble the word: {scrambledWord}</Text>}
      <TextInput
        placeholder="Enter the unscrambled word"
        value={userInput}
        onChangeText={text => setUserInput(text)}
      />
      <Button title="Check Word" onPress={checkWord} />
      <Button title="Skip" onPress={skipWord} />
    </View>
  );
};

export default GameScreen;
