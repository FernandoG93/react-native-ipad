import React from 'react'
import { View, Text, StyleSheet } from "react-native"
import { Button } from 'react-native-elements'

export const Landing = () => {
  return (
    <View style={styles.container}>
      <Text>
        This is a Landing Screen
      </Text>
      <Button
        title="Click here to jump into the next screen!"
        onPress={() => Actions.jump("screen1")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
})
