import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';
import PropTypes from 'prop-types';

const TaskInput = props => {
  const { onAddTask, visible, onCancel } = props;
  const [enteredTask, setEnteredTask] = useState('');

  const taskInputHandler = enteredText => {
    setEnteredTask(enteredText);
  };

  const addTaskHandler = () => {
    onAddTask(enteredTask);
    setEnteredTask('');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Task"
          style={styles.input}
          onChangeText={taskInputHandler}
          value={enteredTask}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addTaskHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },
  button: {
    width: '40%',
  },
});

TaskInput.propTypes = {
  onAddTask: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default TaskInput;
