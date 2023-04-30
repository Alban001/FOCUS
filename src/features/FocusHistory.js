import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import {colors} from '../utils/colors'
import {Spacing} from '../utils/sizes'
console.log('hey')
export const FocusHistory = ({history}) =>{
       if(!history || !history.length) return <Text style={styles.title}>Things we've focused on:</Text>;

       const renderItem = ({ item }) => <Text style={styles.item}>-{item}</Text>;
      return (
        <View style={styles.container}>
            <Text style={styles.title}>Things we've focused on:</Text>
            <FlatList
              data={history}
              renderItem={renderItem}
            />
        </View>
      )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  title:{
      color:colors.white,
      fontSize: Spacing.md,
      textAlign:'center',
  },
  item:{
    color:colors.white,
    textAlign:'center'
  }
})