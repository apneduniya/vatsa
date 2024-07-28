import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput
} from 'react-native';
import HomeScreen from '.';
import React, { useState } from 'react';
import Modal from "react-native-modal";


export default function TabLayout() {
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [addMCQData, setAddMCQData] = useState({
    question: '',
    options: {
      option1: '',
      option2: '',
      option3: '',
      option4: '',
    },
    correctOption: '',
  });
  const [number, onChangeNumber] = React.useState('10');

  const handleEditChange = (text: string) => {
    onChangeNumber(text);
  };


  const [mcqData, setMCQData] = useState([
    {
      "question": "What is the primary function of Doraemon's four-dimensional pocket?",
      "options": ["a) To store food", "b) To store his gadgets", "c) To store his clothes", "d) To store books"],
      "correctOption": "b"
    },
    {
      "question": "What is the name of Nobita's love interest in the series Doraemon?",
      "options": ["a) Shizuka Minamoto", "b) Suneo Honekawa", "c) Jaiko Gouda", "d) Dorami"],
      "correctOption": "a"
    },
    {
      "question": "Which gadget does Doraemon often use to help Nobita travel through time?",
      "options": ["a) Time Belt", "b) Anywhere Door", "c) Time Machine", "d) Bamboo Copter"],
      "correctOption": "c"
    },
    {
      "question": "What is the full name of the main character in Shinchan?",
      "options": ["a) Shinichi Nohara", "b) Shinnosuke Nohara", "c) Shintaro Nohara", "d) Shingo Nohara"],
      "correctOption": "b"
    },
    {
      "question": "What is the name of Shinchan's younger sister?",
      "options": ["a) Himawari Nohara", "b) Ai-chan Nohara", "c) Mimi Nohara", "d) Akiko Nohara"],
      "correctOption": "a"
    },
    {
      "question": "Which gadget helps Nobita to fly in the sky?",
      "options": ["a) Bamboo Copter", "b) Anywhere Door", "c) Small Light", "d) Take-copter"],
      "correctOption": "a"
    },
    {
      "question": "What is the future date when Doraemon was sent back to help Nobita?",
      "options": ["a) 2112", "b) 2025", "c) 2200", "d) 2050"],
      "correctOption": "a"
    },
    {
      "question": "What is the name of Nobita's rival who is good at studies and sports?",
      "options": ["a) Suneo Honekawa", "b) Gian", "c) Dekisugi", "d) Nobisuke Nobi"],
      "correctOption": "c"
    },
    {
      "question": "What type of robot is Doraemon?",
      "options": ["a) A cleaning robot", "b) A cat-like robot", "c) A dog-like robot", "d) A cooking robot"],
      "correctOption": "b"
    },
    {
      "question": "What is the name of Shinchan's mother?",
      "options": ["a) Misae Nohara", "b) Midori Ishizaka", "c) Nene Sakurada", "d) Nanako Oohara"],
      "correctOption": "a"
    },
    {
      "question": "Which of the following is a common activity of Shinchan?",
      "options": ["a) Playing video games", "b) Watching TV", "c) Dancing to the Elephant song", "d) Reading books"],
      "correctOption": "c"
    },
    {
      "question": "What is Shinchan's favorite snack?",
      "options": ["a) Chocobi", "b) Pocky", "c) Dorayaki", "d) Takoyaki"],
      "correctOption": "a"
    },
    {
      "question": "Who is the leader of the Kasukabe Defense Force?",
      "options": ["a) Shinchan", "b) Kazama", "c) Nene", "d) Masao"],
      "correctOption": "b"
    },
  ]);

  const handleAddMCQ = () => {
      
      // change option object to array
      let options = Object.values(addMCQData.options);

      // add new mcq object
      setMCQData([...mcqData, {
        question: addMCQData.question,
        options: options,
        correctOption: addMCQData.correctOption,
      }]);
  
      setAddModalVisible(false);
  };


  return (
    <>
      <View style={{ flex: 1 }}>

        {/* Edit Modal */}
        <Modal isVisible={isEditModalVisible}>
          <View style={styles.editModelContainer}>
            <View style={styles.timeLimitContainer}>
              <Text>Time Limit (in minutes)</Text>
              <TextInput
                style={styles.editInput}
                onChangeText={handleEditChange}
                value={number}
                keyboardType='numeric'
              />
            </View>
            <View style={styles.modelButtonContainer}>
              <TouchableOpacity onPress={() => setEditModalVisible(false)} style={styles.modelCloseButton}>
                <Text style={styles.editText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setEditModalVisible(false)} style={styles.modelSubmitButton}>
                <Text style={styles.editText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Add Modal */}
        <Modal isVisible={isAddModalVisible}>
          <View style={styles.addModelContainer}>
            <TextInput
              style={styles.addInput}
              onChangeText={(text) => setAddMCQData({ ...addMCQData, question: text })}
              value={addMCQData.question}
              placeholder='Question'
            />
            <TextInput
              style={styles.addInput}
              onChangeText={(text) => setAddMCQData({ ...addMCQData, options: { ...addMCQData.options, option1: text } })}
              value={addMCQData.options.option1}
              placeholder='Option 1'
            />
            <TextInput
              style={styles.addInput}
              onChangeText={(text) => setAddMCQData({ ...addMCQData, options: { ...addMCQData.options, option2: text } })}
              value={addMCQData.options.option2}
              placeholder='Option 2'
            />
            <TextInput
              style={styles.addInput}
              onChangeText={(text) => setAddMCQData({ ...addMCQData, options: { ...addMCQData.options, option3: text } })}
              value={addMCQData.options.option3}
              placeholder='Option 3'
            />
            <TextInput
              style={styles.addInput}
              onChangeText={(text) => setAddMCQData({ ...addMCQData, options: { ...addMCQData.options, option4: text } })}
              value={addMCQData.options.option4}
              placeholder='Option 4'
            />
            <TextInput
              style={styles.addInput}
              onChangeText={(text) => setAddMCQData({ ...addMCQData, correctOption: text })}
              value={addMCQData.correctOption}
              placeholder='Correct Option, e.g. a, b, c, d'
            />
            <View style={styles.modelButtonContainer}>
              <TouchableOpacity onPress={() => setAddModalVisible(false)} style={styles.modelCloseButton}>
                <Text style={styles.editText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleAddMCQ()} style={styles.modelSubmitButton}>
                <Text style={styles.editText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>Vatsa</Text>
          <TouchableOpacity style={styles.addButton} onPress={() => setAddModalVisible(true)}>
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
        </View>
        <HomeScreen mcqs={mcqData} />

        {/* Floating Button */}
        <TouchableOpacity style={styles.floatingButton} onPress={() => setEditModalVisible(true)}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 44,
    paddingBottom: 12,
    // marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 28,
    color: 'black',
  },
  addButton: {
    // backgroundColor: 'blue',
    // width: 50,
    // height: 50,
    // borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    color: 'black',
    fontSize: 36,
    // fontWeight: 'bold',
    margin: 0,
    padding: 0,
  },
  addModelContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    borderColor: 'black',
  },
  addInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  editModelContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    borderColor: 'black',
  },
  timeLimitContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editInput: {
    height: 40,
    margin: 12,
    width: 100,
    borderWidth: 1,
    padding: 10,
  },
  modelButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  modelCloseButton: {
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modelSubmitButton: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    backgroundColor: 'blue',
    width: 64,
    height: 64,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  editText: {
    color: 'white',
    fontSize: 16,
    margin: 0,
    padding: 0,
  },
});


