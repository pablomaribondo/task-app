import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = taskTitle => {
    setTasks(currentTasks => [
      ...currentTasks,
      { key: Math.random().toString(), value: taskTitle },
    ]);
  };

  const removeTaskHandler = taskKey => {
    setTasks(currentTasks => {
      return currentTasks.filter(task => task.key !== taskKey);
    });
  };

  return (
    <View style={styles.screen}>
      <TaskInput onAddTask={addTaskHandler} />
      <FlatList
        data={tasks}
        renderItem={itemData => (
          <TaskItem
            id={itemData.item.key}
            title={itemData.item.value}
            onDelete={removeTaskHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
