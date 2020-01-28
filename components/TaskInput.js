import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const TaskInput = props => {
  const { onAddTask } = props;
  const [enteredTask, setEnteredTask] = useState('');

  const taskInputHandler = enteredText => {
    setEnteredTask(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Task"
        style={styles.input}
        onChangeText={taskInputHandler}
        value={enteredTask}
      />
      <Button title="Add" onPress={() => onAddTask(enteredTask)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
});

TaskInput.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default TaskInput;
