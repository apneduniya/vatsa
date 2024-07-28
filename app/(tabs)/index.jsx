import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import MCQ from '@/components/MCQ';


function MCQCard({ question, options }) {
  return (
    <>
      <View style={styles.mcqCardContainer}>
        <Text style={styles.questionText}>{question}</Text>
        {options.map((option, index) => (
          <View key={index}>
            <Text style={styles.optionText}>{option}</Text>
          </View>
        ))}
      </View>
    </>
  );
}


export default function HomeScreen({ mcqs = [] }) {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          {
            mcqs.map((mcq, index) => (
              <MCQCard key={index} question={mcq.question} options={mcq.options} />
            ))
          }
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // marginTop: 50,
    flexDirection: 'column',
    height: '100%', // Take up the full height of the screen
  },
  mcqCardContainer: {
    marginVertical: 16,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  optionText: {
    fontSize: 16,
    marginBottom: 5,
  },
});
