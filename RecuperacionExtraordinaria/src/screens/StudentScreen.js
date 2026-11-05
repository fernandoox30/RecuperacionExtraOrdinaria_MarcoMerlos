import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import InfoRow from '../components/InfoRow';

export default function StudentScreen({ navigation }) {
  // Cambia únicamente estos datos por los tuyos antes de entregar.
  const student = {
    nombre: 'Marco Fernando Merlos Escobar',
    carnet: '20230453',
    seccion: 'B',
    grupo: '1',
    evaluacion : 'Recuperacion Ordinaria modulo 5  Desarrollo de componentes para dispositivos moviles'
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.hero}>
        <View style={styles.logo}>
          <Ionicons name="person" size={42} color="#FFFFFF" />
        </View>
        <Text style={styles.title}>RecuperacionOrdinariaMerlos</Text>
      </View>

      

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Información del estudiante</Text>
        <InfoRow label="NOMBRE" value={student.nombre} />
        <InfoRow label="CARNET" value={student.carnet} />
        <InfoRow label="SECCIÓN" value={student.seccion} />
        <InfoRow label="GRUPO" value={student.grupo} />
        <InfoRow label="Evaluacion" value={student.evaluacion} />
      </View>

      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={() => navigation.navigate('Api')}
      >
        <Text style={styles.buttonText}>Ir a Pantalla 2</Text>
        <Ionicons name="arrow-forward" size={21} color="#FFFFFF" />
      </Pressable>

      <Text style={styles.footer}>Consumo de API • Custom Hook • React Navigation</Text>
    </ScrollView>
  );
}