import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, ActivityIndicator, RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCharacters } from '../hooks/useCharacters';
import ApiCard from '../components/ApiCard';

export default function ApiScreen() {
  const { characters, page, totalPages, loading, error, nextPage, prevPage, refresh, endpoint } = useCharacters();

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={refresh} />}
    >
      <View style={styles.heading}>
        <View style={styles.apiIcon}>
          <Ionicons name="globe-outline" size={28} color="#FFFFFF" />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>tv shows</Text>
          <Text style={styles.subtitle}>Datos obtenidos desde una API externa</Text>
        </View>
      </View>

      <View style={styles.endpoint}>
        <Text style={styles.endpointLabel}>ENDPOINT</Text>
        <Text style={styles.endpointText}>{endpoint}</Text>
      </View>

      {loading && !characters.length ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#A83DDB" />
          <Text style={styles.loading}>Consultando API...</Text>
        </View>
      ) : null}

      {error && !characters.length ? (
        <View style={styles.errorBox}>
          <Text style={styles.errorTitle}>No se pudo cargar la API</Text>
          <Text style={styles.errorText}>{error}</Text>
          <Pressable style={styles.retry} onPress={refresh}>
            <Text style={styles.retryText}>Reintentar</Text>
          </Pressable>
        </View>
      ) : null}

      <View style={styles.pagination}>
        <Pressable disabled={page <= 1 || loading} onPress={prevPage} style={[styles.pageButton, page <= 1 && styles.disabled]}>
          <Ionicons name="chevron-back" size={20} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.pageText}>Página {page} de {totalPages}</Text>
        <Pressable disabled={page >= totalPages || loading} onPress={nextPage} style={[styles.pageButton, page >= totalPages && styles.disabled]}>
          <Ionicons name="chevron-forward" size={20} color="#FFFFFF" />
        </Pressable>
      </View>
    </ScrollView>
  );
}