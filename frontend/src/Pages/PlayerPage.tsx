import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { Filter } from '../components/Filter';
import { Player } from '../Interface/Interface';
import { Link } from 'react-router-dom';

export const PlayersPage: FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get<Player[]>('http://127.0.0.1:5000/api/players', { params: filters });
        setPlayers(response.data);
      } catch (error) {
        console.error('Error fetching players:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, [filters]);

  if (loading) return <div>Loading players...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Players</h1>
      <Filter
        fields={[
          { label: 'Player Name', name: 'name', type: 'text' }
        ]}
        onFilter={setFilters}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {players.map(player => (
          <div key={player.id} className="p-4 bg-white rounded-lg shadow">
            <Link className="text-lg font-semibold cursor-pointer" to={`/player/${player.id}`}>{player.name}</Link>
            <p className="text-gray-600">Position: {player.position}</p>
            <p className="text-gray-600">Team: {player.team_id}</p>
          </div>
        ))}
      </div>
      {players.length === 0 && !loading && (
        <div className="text-center py-8 text-gray-500">
          No players found matching the filters
        </div>
      )}
    </div>
  );
};