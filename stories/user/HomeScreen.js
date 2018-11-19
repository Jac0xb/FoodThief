import React from 'react';
import { Icon, SearchBar } from 'react-native-elements'
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    SafeAreaView
} from 'react-native'

import ShopItem from './components/shopItem.js';
import UnifiedSearchBar from './components/searchbar.js'
import ItemDescription from './components/itemDescription.js'
import Data from '../../constants/ShopItems.json';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
  
    state = {
      currentItem : null
    }
  
    render() {
    
        
        
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.filterContainer}>
                    <UnifiedSearchBar/>
                </View>
                {(this.state.currentItem) 
                ?
                    <ItemDescription item={this.state.currentItem}/> 
                :
                    <ScrollView contentContainerStyle={[styles.shopScrollView, styles.devObject]} contentInsetAdjustmentBehavior="automatic">
                      {Data.map(function(item, index) {
                        item.pos = index;
                        return <ShopItem onPress={(() => {this.setState({currentItem: item})}).bind(this)} key={item.key} item={item} />
                      }.bind(this))}
                      
                    </ScrollView>
                }
            </SafeAreaView>
        );
    }
  
}

const styles = StyleSheet.create({
  shopScrollView: {
    flexGrow: 1,
    flexWrap: "wrap",
    flexDirection: "row"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
