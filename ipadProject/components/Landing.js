import React from 'react'
import { View, Text, StyleSheet } from "react-native"
import { Button } from 'react-native-elements'
import { Actions } from "react-native-router-flux"

export const Landing = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This is a Landing Screen
      </Text>
      <Button
        title="Click here to jump into the next screen!"
        onPress={() => Actions.jump("screen1")}
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
    marginTop: 200,
    fontSize: 60,
    color: "rgba(111, 202, 186, 1)"
  },
  button: {
    width: 400,
    marginTop: 100
  }
})
