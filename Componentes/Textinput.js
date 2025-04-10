import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet, Button } from 'react-native'
import Feather from '@expo/vector-icons/Feather';

function Cuerpo(props) {

    return (
        <View style={styles.containerv}>
            
            <Text style={styles.nombre}> {props.nombre} </Text>
            <View style={styles.container}>

                <TextInput
                    placeholder={props.placeholder}
                    style={styles.cajaTexto}
                    />

                <View style={styles.iconContainer}>
                    <Feather name={props.icon} size={24} color='white' />
                </View>
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
        borderRadius: 10,
        alignItems: 'center',
        paddingHorizontal:0,
        marginBottom: 20,
        overflow: 'hidden',
        marginTop: 5
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
        borderColor: '#f90',
        fontSize: 16,
        color: '#000',
        width: 265,
        height:50,
        marginLeft: 10
        
    },
    nombre: {
        fontWeight: 'bold',
        paddingHorizontal: 15,
    },
    iconContainer: {
        backgroundColor: '#FD7401',
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopEndRadius: 5,
        borderBottomRightRadius: 5,
        height: 50
    },
})