import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  View,
  TouchableHighlight
} from 'react-native';;
import { LinearGradient } from 'expo';

import { ButtonGroup } from 'react-native-elements';

export default class ItemDescription extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    render() {
        
        var {item} = this.props;
        
        return (
        <ScrollView contentContainerStyle={[styles.scrollViewContainer]}>
            <Image style={[styles.productImage]} source={{uri: item.image}} />
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <QuantityGroup ref={this.myRef} style={[styles.quantityGroup]}/>
            <TouchableHighlight underlayColor="rgba(0,0,0,0.1)" style={[styles.checkoutButton, styles.shadow, {backgroundColor: "#6BD968"}]} onPress={() => this.props.addToCart(item, this.myRef.current.state.quantity)}>
                <Text style={[styles.checkoutText, styles.shadow]}>Add to Cart</Text>   
            </TouchableHighlight>
        </ScrollView>
        );
    }
}

class QuantityGroup extends React.Component {
    constructor () {
      super()
      this.state = {
        selectedIndex: 2,
        quantity: 1
      }
      this.updateIndex = this.updateIndex.bind(this)
    }
    
    updateIndex (index) {
      this.setState({quantity : Math.max(0, this.state.quantity - ((index == 0) ? 1 : -1))})
    }
    
    render () {
      const buttons = ['-', '+']
      const { selectedIndex } = this.state
    
      return (
        <View style={{flex: 0, flexDirection: "row", width: "100%"}}>
            <Text style={styles.quantityText}>Quantity: {this.state.quantity}</Text>
            <ButtonGroup
              onPress={this.updateIndex}
              selectedIndex={selectedIndex}
              buttons={buttons}
              containerStyle={[styles.quantityButtons]}
            />
        </View>
      )
    }
}

const styles = StyleSheet.create({
    checkoutText: {
        color: "white", 
        fontFamily: "roboto", 
        lineHeight: 40
    },
    checkoutButton: {
        width: "100%",
        backgroundColor: "#6BD968",
        borderRadius: 16,
        alignItems: 'center',
        height: 40,
        marginVertical: 8 
    },
    description: {
        fontSize: 16,
        marginBottom: 15
    },
    quantityText: {
        lineHeight: 40,
        height: 40,
        fontSize: 16,
        fontFamily: "roboto",
        marginVertical: 5
    },
    quantityButtons: {
        flex: 1,
        width: 60,
        height: 40
    },
    scrollViewContainer: {
        flexGrow: 1,
        padding: 32,
        alignItems: 'center',
        justifyContent: "flex-start"
    },
    productTitle: {
        fontWeight: 'bold',
        fontSize: 20
    },
    productImage: {
        flex: 1,
        width: 120,
        height: 120,
        resizeMode: "contain"
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
