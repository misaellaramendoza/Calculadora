import React, { useRef, useState } from 'react'


enum Operadores{
    sumar, restar, multtiplicar, dividir

}


export const useCalculator = () => {
    const [number, setNumber] = useState('0')
    const [numberAnt, setNumberAnt] = useState('0')
   
    const ultimateOperation = useRef<Operadores>()
   
    const clean = () => {
       setNumber('0')
       setNumberAnt('0')
    }
   
    const armNumber = (numberText: string) => {
   
       // verificar si ya existe un punto decimal
       if(number.includes('.') && numberText === '.') return
   
       if(number.startsWith('0') || number.startsWith ('-0')) {
   
           //preguntas si es el primer puinto decimal
           if(numberText === '.'){
               setNumber( number + numberText)
   
               //evaluamos si es otro cero y hay punto
           } else if( numberText === '0' && number.includes('.')){
               setNumber( number + numberText )
   
               //evaluamos si es diferente de 0 y no tiene un punto decimal
           } else if( numberText !== '0' && !number.includes('.')){
               setNumber( numberText )
   
               //evitar el 00000.0
           }  else if( numberText === '0' && !number.includes('.')){
               setNumber( number )
           } else{
               setNumber( number + numberText)
           }
   
   
       } else{
           setNumber( number + numberText)
       }
       
    }
   
    const positiveNegative = () => {
       if(number.includes('-')){
           setNumber( number.replace('-',''))
       } else {
           setNumber( '-' + number)
       }
   
    }
   
    const btnDel = () => {
   
      let negative = ''
      let numberTemp = number
   
      if(number.includes('-')){
       negative = '-'
       numberTemp = number.substring(1)
      }
   
      if(numberTemp.length > 1){
       setNumber( negative + numberTemp.slice(0,-1) )
      } else {
       setNumber( '0' )
      }
   
    }
   
    const changeNumberForAnt = () => {
   
       if(number.endsWith( '.' )){
           setNumberAnt( number.slice(0,-1) )
       } else{
           setNumberAnt( number )
       }
     
       setNumber( '0' )
    }
    const btnMul = () => {
       changeNumberForAnt()
       ultimateOperation.current = Operadores.multtiplicar
    }
    const btnRest = () => {
       changeNumberForAnt()
       ultimateOperation.current = Operadores.restar
    }
    const btnSum = () => {
       changeNumberForAnt()
       ultimateOperation.current = Operadores.sumar
    }
    const btnDiv = () => {
       changeNumberForAnt()
       ultimateOperation.current = Operadores.dividir
    }
   
    const result = () => {
   
       const num1 = Number( number )
       const num2 = Number( numberAnt )
   
       switch( ultimateOperation.current ){
           case Operadores.sumar: 
               setNumber(  `${ num1 + num2 }` )
               break
           case Operadores.restar: 
               setNumber(  `${ num2 - num1 }` )
               break
           case Operadores.multtiplicar: 
                   setNumber(  `${ num1 * num2 }` )
                   break
           case Operadores.dividir: 
               setNumber(  `${ num2 / num1 }` )
               break
               
       }
   
       setNumberAnt( '0' )
   
   
    }
    return{
        number,
        numberAnt,
        clean,
        positiveNegative,
        btnDel,
        btnDiv,
        btnSum,
        btnMul,
        btnRest,
        armNumber,
        result


    }
        



    
}
