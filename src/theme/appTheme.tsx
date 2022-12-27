import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    backgroundApp: {
        flex: 1,
        backgroundColor: 'black',
        

    },
    calculatorContainer:{
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'

    },
    textResult: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10
    },
    textResultShort: {
        color: 'rgba(255,255,255, 0.5)',
        fontSize: 30,
        textAlign: 'right'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10

    },

})