import React from 'react';
//import { IconElements } from 'react-native-elements'
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableHighlight
} from 'react-native'

import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import ShopItem from './components/shopItem.js';
import UnifiedSearchBar from './components/searchbar.js'
import ItemDescription from './components/itemDescription.js'
import { Ionicons } from '@expo/vector-icons';

var stores = ["Wellcome", "PARKnSHOP", "Fusion"];
var dates = ["22h", "1d22h", "2d22h", "7d22h"]

var implantedData = []

import Data from '../../constants/ShopItems.json';
Data.map(function(item, index) {
    item.pos = index;
    item.store = stores[Math.floor(Math.random() * stores.length)];
    item.distance = Math.round(Math.random() * 3.0, 2) + " Km";
    item.date = randomElement(dates);
    implantedData.push(item);
});

function randomElement(arr) {
    
    return arr[Math.min(Math.round(Math.random() * arr.length, 0), arr.length - 1)]
    
}


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
  
    state = {
        cart: [],
        currentItem : null,
        scene: "search",
        filter: null
    }
  
    render() {

        var searchBar = <UnifiedSearchBar onSubmitEditing={(text) => this.setFilter(text)} onFocus={() => {this.setState({scene: "focused"})}}/>;
        
        var activeComponent = null;
         
        if (this.state.scene == "focused") {
            activeComponent = (
                <SafeAreaView style={styles.container}>
                    {searchBar}
                    <ExpandedSearch/>
                </SafeAreaView>
            )
        }
        else if (this.state.scene == "details") {
            activeComponent = (
            <SafeAreaView style={styles.container}>
                <ItemDescription item={this.state.currentItem} addToCart={(item, quantity) => {
                    var newCart = this.state.cart.slice(0);
                    newCart.push({item, quantity});
                    this.setState({cart: newCart, scene: "search"})
                }} /> 
            </SafeAreaView>)
        }
        else if (this.state.scene == "cart") {
            activeComponent = (<SafeAreaView style={styles.container}>
            </SafeAreaView>)
        }
        else {
            activeComponent = (
            <ScrollView contentContainerStyle={[styles.shopScrollView, styles.devObject]} contentInsetAdjustmentBehavior="automatic">
                {searchBar}
                {implantedData.map(function(item) {
                
                    if (this.state.filter) {
                        if (!item.title.includes(this.state.filter))
                            return;
                    }
                    
                    return <ShopItem onPress={(() => {this.setState({currentItem: item, scene: "details"})}).bind(this)} key={item.title} item={item} />
                }.bind(this))}
            </ScrollView>)
        }
        
        var menuOptions = (this.state.scene == "details" ? "ios-arrow-back" : "ios-menu");
        
        var sum = 0;
        for (var i = 0; i < this.state.cart.length; i++) {
            sum += this.state.cart[i].quantity;
        }
        
        return (
                <Container>
                    <Header>
                      <Left>
                        <Button onPress={() => {this.goBack()}} transparent>
                          <Ionicons style={{marginHorizontal: 8, borderRadius: 1}} size={24} name={menuOptions} />
                        </Button>
                      </Left>
                      <Body>
                        <Title>Search</Title>
                      </Body>
                      <Right>
                        <Button transparent>
                          <Text style={{position: "absolute"}}>{sum}</Text>
                          <Ionicons size={24} name='ios-cart' />
                        </Button>
                        <Button transparent>
                          <Ionicons size={24} name='ios-map' />
                        </Button>
                      </Right>
                    </Header>
                    
                    {activeComponent}
                    
                </Container>
        );
    }
    
    
    setFilter(input) {
        
        if (input.length <= 0) {
            this.setState({filter: null, scene: null});
        }
        else {
            this.setState({filter: input, scene: null});
        }
    }
    
    goBack() {
        this.setState({scene: "search"});
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
