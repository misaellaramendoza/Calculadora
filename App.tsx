import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import { CalculadoraScreen } from './src/screens/CalculadoraScreen'
import { styles } from './src/theme/appTheme'

/* 
<StatusBar 
se coloca un background en negro
el barStyle es para las letras de la hora, red, pila etc que aparecen en la status bar
*/

const App = () => {
  return (
    <SafeAreaView style={styles.backgroundApp}>
      <StatusBar 
        backgroundColor= 'black'
        barStyle='light-content'

      />
      <CalculadoraScreen />
    </SafeAreaView>
    
  )
}
export default App


