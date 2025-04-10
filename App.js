import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Baner from './Componentes/Baner';
import Cuerpo from './Componentes/Textinput';
import Botones from './Componentes/Botones';


export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrol} showsVerticalScrollIndicator={false}>
      
        <View style={styles.containerBanner}>
          <Baner
            imagenB={require('./assets/Imagenes/login.png')}

          />


        </View>

        <Text style={styles.titulo}> Login your account </Text>
        <View style={styles.containerCuerpo}>

          <Cuerpo
            nombre="Email"
            placeholder='ejemplo@gmail.com'
            icon='mail'
          />

          <Cuerpo
            nombre="Password"
            placeholder='Ingrese la contraseña'
            icon='lock' />
          <Text style={styles.texto}> Forgot your Password? </Text>

          <Botones
            boton='Login Now'
            color='#FD7401'
            colorText='white'
          />

          <Botones
            boton='Signup Now'
            color='white'
            colorText='#FD7401'
          />

        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrol: {
    width: '100%'
    
  },
  containerBanner: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  containerCuerpo: {
    flex: 3,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 30

  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 40

  },
  texto: {
    fontSize: 14,
    textDecorationLine: 'underline',
    textAlign: 'right',
    width: '100%',
    paddingRight: 50
  },


});
