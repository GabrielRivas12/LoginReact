import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native'


function Botones(props) {
    return (
        <View style={StyleSheet.container}>
            <TouchableOpacity style={[
                styles.boton,
                 {backgroundColor: props.color}
                 ]}>
                <Text style={[styles.botonTexto, {color: props.colorText}]}>{props.boton}</Text>
            </TouchableOpacity>
        </View>

    )

}

export default Botones;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#f90',
        borderWidth: 1,
        borderRadius: 25,
        overflow: 'hidden',
        alignItems: 'center',
    },
    boton: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FD7401',
        alignItems: 'center',
        paddingVertical: 10,
        marginVertical: 10,
        width: 320,
        height: 50,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    botonTexto: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})