import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet, Button } from 'react-native'

function Cuerpo(props) {

    return (
        <View>
            <View style={StyleSheet.container}>
                <Text style={styles.nombre}> {props.nombre} </Text>
                <TextInput placeholder={props.placeholder}
                    style={styles.cajaTexto} />
            </View>


        </View>
    )

}

export default Cuerpo;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#f90',
        borderWidth: 1,
        borderRadius: 25,
        overflow: 'hidden',
        alignItems: 'center',
    },
    containerbotones: {
        flexDirection: 'row',
    },
    label: {
        color: '#1E2A78',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cajaTexto: {
        backgroundColor: '#F1F3F6',
        borderColor: '#f90',
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 16,
        color: '#000',
        width: 320,
        marginBottom: 20
    },
    nombre: {
        fontWeight: 'bold',
        paddingHorizontal: 15,


    }

})