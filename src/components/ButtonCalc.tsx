import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native'


interface Props{
    text: string
    color?: string
    width?: boolean
    accion: ( numberText:string ) => void
}

export const ButtonCalc = ({ text, color='#2D2D2D', width = false, accion}: Props) => {
  return (
     <TouchableOpacity
        onPress={ () => accion(text) }
     >
        <View style={{
            ...styles.button ,
            backgroundColor: color,
            width: ( width ) ? 180 : 80

        }}>
            <Text style={ {
                ...styles.buttonText,
                color: (color === '#9B9B9B') ? 'black' : 'white'
                } }> {text} </Text>
        </View>
     </TouchableOpacity>
  )
}
 const styles = StyleSheet.create({
   
    button: {
        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },

    buttonText:{
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300'

    }

})