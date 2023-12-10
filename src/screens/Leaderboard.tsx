
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);


  useEffect(() => {

    const fetchData = async () => {
      try {
  
        const data = await fetchLeaderboardData();
        setLeaderboardData(data);
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      }
    };

    fetchData();
  }, []);


  const fetchLeaderboardData = async () => {
   
    return [
      { id: 1, name: 'Player1', score: 100 },
      { id: 2, name: 'Player2', score: 90 },
      { id: 3, name: 'Player3', score: 80 },
   
    ];
  };

  return (
    <View>
      <Text>Leaderboard Screen</Text>
      {leaderboardData.map((player) => (
        <View key={player.id}>
          <Text>{player.name}</Text>
          <Text>Score: {player.score}</Text>
        </View>
      ))}
    </View>
  );
};

export default Leaderboard;
