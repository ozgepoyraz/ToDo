import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import SearchBar from './components/SearchBar';
import ToDoCard from './components/ToDoCard';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [counter, setCounter] = useState(0);

  var searchedText;

  const handleSearch = text => {
    searchedText = text;
  };

  const updateList = () => {
    toDoList.push(searchedText);
    setToDoList(toDoList);
    setCounter(toDoList.length);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.counter}>{counter}</Text>
      </View>
      <View>
        <FlatList
          data={toDoList}
          renderItem={({item}) => (
            <ToDoCard title={item}></ToDoCard>
          )}></FlatList>
      </View>
      <View style={styles.input_container}>
        <SearchBar onSearch={handleSearch}></SearchBar>
        <TouchableOpacity style={styles.button} onPress={updateList}>
          <Text>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
  },
  inner_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  title: {
    color: '#ffa500',
    fontSize: 30,
    fontWeight: 'bold',
  },
  counter: {
    color: '#ffa500',
    fontSize: 30,
  },
  input_container: {
    backgroundColor: '#37474f',
    height: Dimensions.get('window').height / 6,
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 30,
    padding: 15,
    borderRadius: 15,
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#ffa500',
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
  },
  checked_item: {
    backgroundColor: 'grey',
  },
});

export default App;
