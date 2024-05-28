import React from 'react';
import {View, FlatList} from 'react-native';
import TodoItem from '../TodoItem';

const TodoList = ({todos, deleteTodo}) => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <TodoItem todo={item} deleteTodo={deleteTodo} />
        )}
      />
    </View>
  );
};

export default TodoList;
