import React from 'react';
import { Icon, SearchBar, } from 'react-native-elements';
import {
  Text,
  View,
  StyleSheet,
  TextInput
} from 'react-native';
import { LinearGradient } from 'expo';

export default class UnifiedSearchBar extends React.Component {
    
    state = {input : ""}
    
    render() { 
        
        return (<LinearGradient colors={['#00d2ff', '#3a7bd5']} start={[0, 0]} end={[10,0]} style={[styles.filterContainer, {marginLeft: 16, marginRight: 16, borderRadius: 16+12}]}>
            <TextInput onFocus={this.props.onFocus} onSubmitEditing={this.props.onSubmitEditing}
            style={{borderColor: "#F1F1F1", paddingLeft: 16, paddingRight: 24, paddingVertical: 12, fontSize: 16, color: "white", width: "100%", textAlign: "left"}}
            onChangeText={(input) => this.setState({input})}
            placeholderTextColor="white"
            selectionColor="white"
            placeholder="What are you looking for?" 
            />
            <Icon name='search' color="#F1F1F1" containerStyle={{position: 'absolute', right: 24}}/>
        </LinearGradient>)
    }
}

const styles = StyleSheet.create({
    filterSerachbarInput: {
      backgroundColor: "white"
    },
    filterText: {
      fontSize: 16,
      marginRight: 5
    },
    filterIcon: {
      marginRight: 5
    },
    filterContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },
    filterGroup: {
      flexDirection : "row",
      paddingHorizontal: 5,
      borderLeftColor: "#E1E1E1",
      borderLeftWidth: 1
    }
});
