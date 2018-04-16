import React from "react"
import { Router, Scene, Stack } from "react-native-router-flux"
import { Landing } from "./Landing"
import { Screen1 } from "./Screen1"

export const Navigator = () => (
  <Router>
    <Stack key="root">
      <Scene key="landing" component={Landing}/>
      <Scene key="screen1" component={Screen1}/>
    </Stack>
  </Router>
)