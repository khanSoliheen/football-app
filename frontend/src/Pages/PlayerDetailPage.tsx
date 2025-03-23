import { FC, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Player } from '../Interface/Interface';

export const PlayerDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [player, setPlayer] = useState<Player | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await axios.get<Player>(`http://127.0.0.1:5000/api/player/${id}`);
        setPlayer(response.data);
      } catch (error) {
        console.error('Error fetching player details:', error);
        setError('Error fetching player details');
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchPlayer();
  }, [id]);

  if (loading) return <div>Loading player details...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!player) return <div className="text-gray-500">Player not found</div>;

  return (
    <div className="p-4">
      <button onClick={() => navigate(-1)} className="mb-4 px-4 py-2 bg-gray-200 rounded">
        Back
      </button>
      <h1 className="text-2xl font-bold mb-4">{player.name}</h1>
      <p className="text-lg"><strong>Position:</strong> {player.position}</p>
      <p className="text-lg"><strong>Team:</strong> {player.team_id}</p>
    </div>
  );
};
