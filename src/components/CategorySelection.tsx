import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const CategorySelection = ({onSelectCategory}) => {
  const categories = ['Animals', 'Countries', 'Fruits'];
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <View>
      <Text>Select a Category:</Text>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setSelectedCategory(category);
            onSelectCategory(category);
          }}>
          <Text>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CategorySelection;
