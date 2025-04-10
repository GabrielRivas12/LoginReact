import React, { Component } from 'react'
import {View, Image, Text, StyleSheet} from "react-native";

function Baner(props){
    return(
            
        <View style={styles.conteiner}>
            <Image style={styles.imagenB} source={props.imagenB}/>
            <Text style={styles.titulo}> Welcome! </Text>
             
       
</View>
    );
}

export default Baner;

const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F1F3F6'
    },
    imagenB:{
        height:230,
        width: 230,
        borderRadius: 115,
        borderWidth: 1,
        borderColor: '#ccc',
        margin: 15
        
    },
    titulo:{
        fontSize: 20,
        justifyContent: 'center',
        fontWeight: 'bold',
        
    }


})