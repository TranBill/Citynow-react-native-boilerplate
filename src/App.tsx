/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable no-use-before-define */
/* eslint-disable react/react-in-jsx-scope */
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function App () {
  return (
    <View style={styles.container}>
      <Text> Hello Longluu</Text>
      <Text> Hello Loc</Text>
      <Text> Hellu Hung</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
