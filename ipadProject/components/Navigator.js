import React from "react"
import { Router, Scene, Stack } from "react-native-router-flux"
import { Landing } from "./Landing"
import { Screen1 } from "./Screen1"
import { Screen2 } from "./Screen2"
import { Screen3 } from "./Screen3"
import { Screen4 } from "./Screen4"
import { Screen5 } from "./Screen5"
import { Screen6 } from "./Screen6"
import { Screen7 } from "./Screen7"
import { Screen8 } from "./Screen8"

export const Navigator = () => (
  <Router>
    <Stack key="root">
      <Scene key="landing" component={Landing}/>
      <Scene key="screen1" component={Screen1}/>
      <Scene key="screen2" component={Screen2}/>
      <Scene key="screen3" component={Screen3}/>
      <Scene key="screen4" component={Screen4}/>
      <Scene key="screen5" component={Screen5}/>
      <Scene key="screen6" component={Screen6}/>
      <Scene key="screen7" component={Screen7}/>
      <Scene key="screen8" component={Screen8}/>
    </Stack>
  </Router>
)