import { useState } from 'react';
import { StyleSheet,Text, View, TextInput, Button} from 'react-native';
export default function App(){
  const [texto, setTexto] = useState('');
  const [textoExibido, setTextoExibido] = useState('');
  const confirmarTexto = () => { setTextoExibido(texto) };
return(<View style={estilos.contenedor}>
        <Text style={estilos.rotulo}>Digite algo abaixo:</Text>
        <TextInput style={estilos.campo}
          placeholder="Escreva aqui..." onChangeText={(valor)=>{setTexto(valor); console.log(texto)}}
          value={texto}
        />
        <View style ={{ marginTop: 10 }}>
          <Button title="Exibir" color="#007AFF" onPress={confirmarTexto}></Button>
        </View>
        <View style={estilos.resultado}>
          <Text style={estilos.rotulo}>Você está digitando:</Text>
          <Text>{textoExibido}</Text>
        </View>
      </View>);//JSX
}
const estilos = StyleSheet.create({
  rotulo:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  contenedor: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 40,
    justifyContent: 'center',
  },
  campo: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  resultado:{
    marginTop: 30,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#007AFF',
    elevation: 2, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  }
 
})
