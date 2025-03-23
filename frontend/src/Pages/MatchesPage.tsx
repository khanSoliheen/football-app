import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { Match } from '../Interface/Interface';
import { MatchCard } from '../components/Matches';

export const MatchesPage: FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<string>(''); // Default to empty

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get<Match[]>('http://127.0.0.1:5000/api/matches', { 
          params: status ? { status } : {}  // Send status if selected
        });
        setMatches(response.data);
      } catch (error) {
        console.error('Error fetching matches:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, [status]);

  if (loading) return <div>Loading matches...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Matches Schedule</h1>

      {/* Status Dropdown */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="mb-4 p-2 border rounded"
      >
        <option value="">All</option>
        <option value="UPCOMING">Upcoming</option>
        <option value="COMPLETED">Completed</option>
      </select>

      <div className="space-y-4">
        {matches.length > 0 ? (
          matches.map(match => <MatchCard key={match.id} match={match} />)
        ) : (
          <div className="text-center py-8 text-gray-500">
            No matches found matching the filters
          </div>
        )}
      </div>
    </div>
  );
};
