import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const TodoItem = ({todo, deleteTodo}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {todo.title}
      </Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteTodo(todo.id)}>
        <Text style={styles.deleteButtonText}>{'Delete'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;
