import React from 'react'
import { View, Text, StyleSheet, Image } from "react-native"
import { Button } from 'react-native-elements'
import { Actions } from "react-native-router-flux"

export const Screen8 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This is the Last Screen!
      </Text>
      <Image src="../images/party.png" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: "column",
    alignItems: "center"
  },
  text: {
    marginTop: 300,
    fontSize: 70,
    color: "Blue",
    marginBottom: 50
  },
  button: {
    width: 400,
    marginTop: 100
  }
})
