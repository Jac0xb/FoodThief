import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text
} from 'react-native'

export default class ItemDescription extends React.Component {
    render() {
        
        var {item} = this.props;
        
        return (
        <ScrollView style={styles.scrollViewContainer}>
            <Image source={{uri: item.image}} />
            <Text>{item.title}</Text>
        </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1
    }
});
