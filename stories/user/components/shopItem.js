import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native'

export default class ShopItem extends React.Component {
  render() {
      
    var {item} = this.props;
        
    return (
      <TouchableHighlight underlayColor="rgba(0,0,0,0.1)" 
        onPress={() => {this.props.onPress()}} style={[styles.shopItemTouchableContainer, {width: "50%", paddingTop: (item.pos <= 1 ? 16 : 8), paddingLeft: (item.pos % 2 == 0 ? 16 : 8), paddingRight: (item.pos % 2 == 0 ? 8 : 16)}]}>
          <View style={[styles.shopItemChild, styles.devObject, {width: "100%"}, styles.shadow]}>
              <View style={[styles.shopItemTouchableContainer, {width: "100%"}]}>
                <Image style={[styles.shopItemImage]} source={{uri: item.image}} />
                <Text style={styles.shopItemTitle}>{item.title}</Text>
                <Text style={styles.shopItemStore}>{"Sold by " + item.store}</Text>
                <Text style={styles.item}>{item.distance}</Text>
              </View>
            <Text style={styles.shopItemStore}>{"Expires in 1 Day.."}</Text>
          </View>
      </TouchableHighlight>
      );
  }
}

const styles = StyleSheet.create({
  shopItemTouchableContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems:'center'
  },
  shopItemChild: {
    padding: 8,
    justifyContent: 'center',
    alignItems:'center',
    width: "100%",
    borderColor: "gray",
    backgroundColor: "white",
    borderWidth: 0
  },
  shopItemTitle: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  shopItemStore: {
    textAlign: 'center'
  },
  shopItemImage: {
    width: 100,
    height: 100,
    resizeMode: "contain"
  },
  shopItemContainer: {
    flex: 1,
    flexDirection: "column"
  },
  shopItemDetailsContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
      	width: 0,
      	height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    }
});
