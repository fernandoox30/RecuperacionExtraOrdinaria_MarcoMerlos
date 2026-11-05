import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import InfoRow from '../components/InfoRow';

export default function StudentScreen({ navigation }) {
  const student = {
    nombre: 'Marco Fernando Merlos Escobar',
    carnet: '20230453',
    seccion: 'B',
    grupo: '1',
    evaluacion: 'Recuperación Extraordinaria - Módulo 5'
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.icon}></Text>
      <Text style={styles.title}>Datos del estudiante</Text>

      <View style={styles.card}>
        <InfoRow label="Nombre" value={student.nombre} />
        <InfoRow label="Carnet" value={student.carnet} />
        <InfoRow label="Sección" value={student.seccion} />
        <InfoRow label="Grupo" value={student.grupo} />
        <InfoRow label="Evaluación" value={student.evaluacion} />
      </View>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Series')}
      >
        <Text style={styles.buttonText}>Ir a Pantalla 2</Text>
        <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F7F6FF',
    padding: 20,
    justifyContent: 'center'
  },
  icon: {
    fontSize: 60,
    textAlign: 'center'
  },
  title: {
    color: '#29234F',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16
  },
  card: {
    backgroundColor: '#ECEAFF',
    padding: 12,
    borderRadius: 16
  },
  button: {
    backgroundColor: '#5145CD',
    padding: 16,
    borderRadius: 13,
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 9
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 17
  }
});