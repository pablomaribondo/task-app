import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from 'react-native';

import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = taskTitle => {
    setTasks(currentTasks => [...currentTasks, { key: Math.random().toString(), value: taskTitle }]);
  }

  return (
    <View style={styles.screen}>
      <TaskInput onAddTask={addTaskHandler} />
      <FlatList 
        data={tasks} 
        renderItem={itemData => <TaskItem title={itemData.item.value}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
