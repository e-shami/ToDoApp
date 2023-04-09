import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialIcons';

export function Body() {
  // getting screen dimensions
  
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');
  const [edit, setEdit] = useState('0');
  const addOrUpdateItem = () => {
    if (edit !== '0') {
      setItems(
        items.map(item => {
          if (item.key === edit) {
            return {key: item.key, text: text};
          } else {
            return item;
          }
        }),
      );
    } else {
      setItems([...items, {key: Date.now().toString(), text: text}]);
    }
    setText('');
    Keyboard.dismiss();
    setEdit('0');
  };
  
  const setButtonColor = () => {
    if (!text) {
      return 'lightgrey';
    } else {
      return 'skyblue';
    }
  };
  
  return (
    <View style={styles.body}>
      {}
      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          style={{flex: 0.76, fontSize: 20, fontWeight: '600'}}
          label="Enter an Item"
          value={text}
          onChangeText={text => setText(text)}
        />
        <Button
          mode="custom"
          style={[
            styles.button,
            {height: 45, backgroundColor: setButtonColor()},
          ]}
          disabled={!text}
          onPress={() => addOrUpdateItem()}>
          <Text style={[styles.text, {color: 'white'}]}>
            {edit === '0' ? 'Add Item' : 'Update Item'}
          </Text>
        </Button>
      </View>
      <ScrollView style={styles.subBody}>
        <View style={{marginBottom: 20}}>
          {items.map((item, index) => {
            return (
              <View
                key={item.key}
                style={[styles.textBlock, {borderWidth: 1, borderRadius: 10}]}>
                <View
                  style={[styles.textBlock, {maxWidth: '75%', height: '90%'}]}>
                  <Text style={[styles.text, styles.textPallet]}>
                    {index + 1}{' '}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setText(item.text);
                      setEdit(item.key);
                    }}
                    style={{width: '100%', justifyContent: 'center'}}>
                    <Text style={[styles.text, {marginLeft: 8, fontSize: 18}]}>
                      {item.text}
                    </Text>
                  </TouchableOpacity>
                </View>
                
                <TouchableOpacity
                  onPress={() => {
                    setItems(items.filter(i => i.key !== item.key));
                  }}>
                  <Icon name="delete" size={30} color="red" />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'chalky',
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 12,
    padding: 10,
  },
  button: {
    flex: 0.24,
    justifyContent: 'center',
    marginLeft: 10,
    alignItems: 'center',
  },
  subBody: {
    height: Dimensions.get('window').height * 0.67,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  textBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
    padding: 2,
    borderRadius: 10,
  },
  textPallet: {
    backgroundColor: 'skyblue',
    fontSize: 18,
    color: 'white',
    height: 25,
    width: 20,
    textAlign: 'center',
  },
});