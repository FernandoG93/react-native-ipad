import React from "react"
import { Router, Scene, Stack } from "react-native-router-flux"
import { Landing } from "./Landing"

export const Navigator = () => (
  <Router>
    <Stack key="root">
      <Scene key="landing" component={Landing}/>
    </Stack>
  </Router>
)