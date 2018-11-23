import React from 'react';
import { Icon, SearchBar } from 'react-native-elements'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'
import { LinearGradient } from 'expo';

export default class UnifiedSearchBar extends React.Component {
    render() { 
        return (<View style={styles.filterContainer}>
          <SearchBar 
            containerStyle={styles.filterSearchbarContainer}
            inputStyle={styles.filterSerachbarInput}
            onChangeText={() => {}}
            onClearText={() => {}}
            placeholder='What are you looking for?' 
          />
          <View style={styles.filterGroup}>
            <Icon containerStyle={styles.filterIcon} name='dehaze' size={14} />
            <Text style={[styles.filterText]} adjustsFontSizeToFit={true}>Filter</Text>
          </View>
        </View>)
    }
}

const styles = StyleSheet.create({
    filterSearchbarContainer: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.0)",
      borderColor: "rgba(0,0,0,0.0)",
      borderTopColor : "rgba(0,0,0,0.0)",
      borderBottomColor: "rgba(0,0,0,0.0)"
    },
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
      backgroundColor: "#F1F1F1",
      flexDirection: "row",
      justifyContent: "center",
      width: "100%",
      alignItems: "center"
    },
    filterGroup: {
      flexDirection : "row",
      paddingHorizontal: 5,
      borderLeftColor: "#E1E1E1",
      borderLeftWidth: 1
    }
});
