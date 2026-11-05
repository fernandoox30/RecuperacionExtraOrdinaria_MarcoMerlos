import { View, Text, ScrollView, StyleSheet, ActivityIndicator, Pressable } from 'react-native';
import useCharacters from '../hooks/useCharacters';
import ApiCard from '../components/ApiCard';

export default function ApiScreen() {
  const { shows, loading, error, loadShows } = useCharacters();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Series de TV</Text>
      <Text style={styles.subtitle}>Datos obtenidos de TVmaze</Text>

      {loading && <ActivityIndicator size="large" color="#5145CD" />}

      {!!error && (
        <View style={styles.message}>
          <Text>{error}</Text>
          <Pressable style={styles.button} onPress={loadShows}>
            <Text style={styles.buttonText}>Intentar de nuevo</Text>
          </Pressable>
        </View>
      )}

      {shows.map(show => <ApiCard key={show.id} show={show} />)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F6FF',
    padding: 15
  },
  title: {
    color: '#29234F',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitle: {
    color: '#77718F',
    textAlign: 'center',
    marginBottom: 15
  },
  message: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12
  },
  button: {
    backgroundColor: '#5145CD',
    padding: 12,
    borderRadius: 10,
    marginTop: 10
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});