import { StyleSheet, Text, View, TextInput } from "react-native";
export default function App(){
  return(<View style={estilos.contenedor}>
    <Text style={estilos.rotulo}>Digite algo abaixo:</Text>
    <TextInput style={estilos.campo}
      placeholder="Escreva aqui..."
    />
    <View>
      <Text style={estilos.rotulo}>Você está digitando:</Text>
      <Text style={estilos.rotulo}>OK</Text>
    </View>
  </View>);//JSX
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundcolor: '#ffebf7',
    padding: 40,
    justifyContent: center,
  },
  rotulo: {
    fontSize: 18,
    fontWeight: bold,
    marginBottom: 10,
    color: '#161515',
  },
  campo: {
    height: 50,
    borderWidth: 1,
    borderColor: '#d5d5d5',
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#ffffff',
    fontSize: 16,
  },
})
