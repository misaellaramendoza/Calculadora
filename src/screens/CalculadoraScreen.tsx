import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { ButtonCalc } from '../components/ButtonCalc'
import { styles } from '../theme/appTheme'
import { useCalculator } from '../hooks/useCalculator'


export const CalculadoraScreen = () => {
    const { 
            number, 
            numberAnt, 
            clean, 
            positiveNegative, 
            btnDel, 
            btnDiv, 
            armNumber, 
            btnMul, 
            btnRest, 
            btnSum, 
            result} = useCalculator()
  return (
    <View style={ styles.calculatorContainer }> 

       {
        (numberAnt !== '0' ) && (
            <Text style={ styles.textResultShort }>{ numberAnt }</Text>
        )
       }
        <Text 
            style={ styles.textResult }
            numberOfLines={ 1 }
            adjustsFontSizeToFit={true}
        >{ number }</Text>
        {/* FILA DE BOTONES */}
        <View style= { styles.row }>
            <ButtonCalc text='C' color= '#9B9B9B' accion={ clean } />
            <ButtonCalc text='+/-' color= '#9B9B9B' accion={ positiveNegative } />
            <ButtonCalc text='del' color= '#9B9B9B' accion={ btnDel }/>
            <ButtonCalc text='/' color= '#FF9427' accion={ btnDiv } />
        </View>

        {/* FILA DE BOTONES */}
        <View style= { styles.row }>
            <ButtonCalc text='7' accion={ armNumber }/>
            <ButtonCalc text='8' accion={ armNumber } />
            <ButtonCalc text='9' accion={ armNumber } />
            <ButtonCalc text='x' color= '#FF9427' accion={ btnMul } />
        </View>

        {/* FILA DE BOTONES */}
         <View style= { styles.row }>
            <ButtonCalc text='4' accion={ armNumber } />
            <ButtonCalc text='5' accion={ armNumber } />
            <ButtonCalc text='6' accion={ armNumber } />
            <ButtonCalc text='-' color= '#FF9427' accion={ btnRest } />
        </View>

        {/* FILA DE BOTONES */}
        <View style= { styles.row }>
            <ButtonCalc text='1' accion={ armNumber } />
            <ButtonCalc text='2' accion={ armNumber } />
            <ButtonCalc text='3' accion={ armNumber } />
            <ButtonCalc text='+' color= '#FF9427' accion={ btnSum } />
        </View>

        {/* FILA DE BOTONES */}
        <View style= { styles.row }>
            <ButtonCalc text='0' width accion={ armNumber } />
            <ButtonCalc text='.' accion={ armNumber } />
            <ButtonCalc text='=' color= '#FF9427' accion={ result }/>
        </View>
    </View>
  )
}
 {/* #2D2D2D gris oscuro */}
 {/* #FF9427 naranja */}