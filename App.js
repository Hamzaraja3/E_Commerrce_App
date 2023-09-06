import { View, Text } from 'react-native'
import React from 'react'
import Splash from './APP/Screens/Splash'
import Login from './APP/Screens/Login'
import Signup from './APP/Screens/Signup'
import Dashboard from './APP/Screens/Dashboard'
import Stacknavigation from './APP/components/Stacknavigation'
import Store from './APP/components/Store'
import {Provider} from 'react-redux'

const App = () => {
  console.disableYellowBox = true;
  return (
  //  <Splash/>
  // <Login/>
  // <Signup/>
  // <Dashboard/>
  <Provider store={Store}>
  <Stacknavigation/>
  </Provider>
  )
}

export default App