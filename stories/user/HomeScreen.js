import React from 'react';
import { Icon, SearchBar } from 'react-native-elements'
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableHighlight
} from 'react-native'

import ShopItem from './components/shopItem.js';
import UnifiedSearchBar from './components/searchbar.js'
import ItemDescription from './components/itemDescription.js'
import Data from '../../constants/ShopItems.json';

var stores = ["Wellcome, Hang Hau", "FamilyMart, ", "PARKnSHOP, Clear Water Bay", "Fusion, HKUST Campus"];

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
  
    state = {
      currentItem : null,
      searchFocused: false
    }
  
    render() {

        var reactObject = <UnifiedSearchBar onSubmitEditing={() => {this.setState({searchFocused: false})}} onFocus={() => {this.setState({searchFocused: true})}}/>     
    
        if (this.state.searchFocused) {
            return (
                <SafeAreaView style={styles.container}>
                    {reactObject}
                    <ExpandedSearch/>
                </SafeAreaView>
            )
        }
        
        if (this.state.currentItem) {
            return (
            <SafeAreaView style={styles.container}>
                <View>
                    <Icon onPress={this.setState({currentItem: null})} name="ios-arrow-back"/>
                </View>
                <ItemDescription item={this.state.currentItem}/> 
            </SafeAreaView>
            )
        }
        
        return (
            <SafeAreaView style={styles.container}>
                {reactObject}
                <ScrollView contentContainerStyle={[styles.shopScrollView, styles.devObject]} contentInsetAdjustmentBehavior="automatic">
                  {Data.map(function(item, index) {
                    item.pos = index;
                    item.store = stores[Math.floor(Math.random() * stores.length)];
                    item.distance = Math.round(Math.random() * 3.0, 2) + " Km";
                    return <ShopItem onPress={(() => {this.setState({currentItem: item})}).bind(this)} key={item.title} item={item} />
                  }.bind(this))}
                  
                </ScrollView>
            </SafeAreaView>
        );
    }
  
}

class ExpandedSearch extends React.Component {
    
    styles = StyleSheet.create({
       filterContainer : {
            flex: 0,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-start",
       },
       filterButtons: {
           borderRadius: 20, 
           backgroundColor: "rgba(240,240,240,0.5)", 
           paddingVertical: 4,
           paddingHorizontal: 8,
           marginRight: 6,
           marginVertical: 4,
           height: 48
            
       },
       filterButtonText: {
            fontFamily: "roboto",
            justifyContent: 'center',
            alignItems: 'center',
            textAlignVertical: 'center', 
            textAlign:'center',
            height: 40,
            lineHeight: 40,
            flex: 1
       },
    });
    
    render() {
        
        var Categories = ["Cereals", "Sauces", "Packaged Goods", "Soups", "Seasonings", "Canned Goods"]
        var {styles} = this;
        
        return (
            <View style={{flex: 1, justifyContent: "flex-start", flexDirection: "column", padding: 16 }}>
                <View style={{marginVertical: 8, width: "100%", borderBottomColor: "rgba(0,0,0,0.25)", borderBottomWidth: 1}}><Text>Categories</Text></View>
                <View style={styles.filterContainer}>
                    {Categories.map(function(category, index) {
                        
                        return (
                            <TouchableHighlight key={category} style={[styles.filterButtons]}>
                                <Text style={styles.filterButtonText}>
                                    {category}
                                </Text>
                            </TouchableHighlight>)
                      }.bind(this))}
                </View>
                <View style={{marginVertical: 8, width: "100%", borderBottomColor: "rgba(0,0,0,0.25)", borderBottomWidth: 1}}><Text>Locations</Text></View>
                <View style={styles.filterContainer}>
                    {stores.map(function(category, index) {
                        
                        return (
                            <TouchableHighlight key={category} style={[styles.filterButtons]}>
                                <Text style={styles.filterButtonText}>
                                    {category}
                                </Text>
                            </TouchableHighlight>)
                      }.bind(this))}
                </View>
            </View>
        )
        
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
