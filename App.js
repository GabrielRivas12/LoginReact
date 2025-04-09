import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Baner from './Componentes/Baner';
import Cuerpo from './Componentes/Cuerpo';
import Botones from './Componentes/Botones';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.containerBanner}>
        <Baner
          imagenB={require('./assets/Imagenes/login.png')}
        />
        
      </View>

      <View style={styles.containerCuerpo}>
        <Text style={styles.titulo}> Login your account </Text>
        <Cuerpo
          nombre="Email"
        />

        <Cuerpo
          nombre="Password" />
        <Text style={styles.texto}> Forgot your Password </Text>

        <Botones
          boton='Login Now'
        />

        <Botones style={styles.botonpassword}
          boton='Signup Now'
        />
      </View>
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

  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20
  },
  texto: {
    fontSize: 14,
    textDecorationLine: 'underline',
    paddingHorizontal: 40,
    textAlign: 'right',
  },
  botonpassword: {
    backgroundColor: 'while'
  }

});
