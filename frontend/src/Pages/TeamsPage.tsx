import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { Filter } from '../components/Filter';
import { Team } from '../Interface/Interface';

export const TeamsPage: FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get<Team[]>('http://127.0.0.1:5000/api/teams', { params: filters });
        setTeams(response.data);
      } catch (error) {
        console.error('Error fetching teams:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, [filters]);

  if (loading) return <div>Loading teams...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Football Teams</h1>
      <Filter 
        fields={[
          { label: 'Team Name', name: 'name', type: 'text' }
        ]}
        onFilter={setFilters}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {teams.map(team => (
          <div key={team.id} className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold">{team.name}</h3>
            <p className="text-gray-600">Competition: {team.competition_id}</p>
            <p className="text-gray-600">Area: {team.area_id}</p>
          </div>
        ))}
      </div>
      {teams.length === 0 && !loading && (
        <div className="text-center py-8 text-gray-500">
          No teams found matching the filters
        </div>
      )}
    </div>
  );
};