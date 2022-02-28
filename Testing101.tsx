import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Testing101() {
  return (
    <View style={styles.container}>
      <Text>Testing101</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'dodgerblue'
    }
})