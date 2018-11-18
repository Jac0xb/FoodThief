import React from 'react';
import { Icon } from 'react-native-elements'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView
} from 'react-native'

;

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.filterContainer}>
        <Icon name='rowing' />
          <Text style={styles.filterText}>Filter</Text>
        </View>
        <ScrollView style={{}} contentContainerStyle={{}}>
          
        </ScrollView>
      </SafeAreaView>
    );
  }
  
}

const styles = StyleSheet.create({
  filterText: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  filterContainer: {
    backgroundColor: "#F1F1F1",
    textAlign: "right",
    flexDirection: "row-reverse",
    width: "100%"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
