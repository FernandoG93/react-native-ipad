import React from 'react'
import { View, Text, StyleSheet } from "react-native"
import { Button } from 'react-native-elements'
import { Actions } from "react-native-router-flux"

export const Screen4 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This is the 4th Screen!
      </Text>
      <Button
        title="Click here to jump into the next screen!"
        onPress={() => Actions.jump("screen5")}
        style={styles.button}
      />
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
    marginTop: 100,
    fontSize: 50,
    color: "orange"
  },
  button: {
    width: 400,
    marginTop: 100
  }
})
