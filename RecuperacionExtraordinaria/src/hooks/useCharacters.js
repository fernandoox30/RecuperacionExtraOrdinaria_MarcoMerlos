
import { useEffect, useState } from 'react';

const URL = 'https://api.tvmaze.com/shows?page=0';

export default function useCharacters() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function loadShows() {
    try {
      setLoading(true);
      setError('');

      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error('Error al consultar la API');
      }

      const data = await response.json();

      const formattedShows = data.slice(0, 10).map(item => ({
        id: item.id,
        title: item.name,
        image: item.image?.medium || null,
        genres: item.genres || [],
        premiered: item.premiered || 'No disponible',
        description: (item.summary || 'Sin descripción')
          .replace(/<[^>]*>/g, '')
      }));

      setShows(formattedShows);

    } catch (e) {
      setError('No se pudieron cargar las series. Revisa internet.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadShows();
  }, []);

  return { shows, loading, error, loadShows };
}
