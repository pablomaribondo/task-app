import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addTaskHandler = taskTitle => {
    setTasks(currentTasks => [
      ...currentTasks,
      { key: Math.random().toString(), value: taskTitle },
    ]);
    setIsAddMode(false);
  };

  const removeTaskHandler = taskKey => {
    setTasks(currentTasks => {
      return currentTasks.filter(task => task.key !== taskKey);
    });
  };

  const cancelTaskAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Task" onPress={() => setIsAddMode(true)} />
      <TaskInput
        visible={isAddMode}
        onAddTask={addTaskHandler}
        onCancel={cancelTaskAdditionHandler}
      />
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
