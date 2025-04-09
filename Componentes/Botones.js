import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native'


function Botones(props) {
    return (
        <View style={StyleSheet.container}>
            <TouchableOpacity style={styles.boton}>
                <Text style={styles.botonTexto}>{props.boton}</Text>
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
        backgroundColor: '#FD7401',
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: 10,     
        marginVertical: 10,
        width: 320,              
        height: 50,
        justifyContent: 'center',
    },
    botonTexto: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})