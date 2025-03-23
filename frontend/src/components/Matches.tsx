import { FC } from 'react';
import { Match } from '../Interface/Interface';

interface MatchCardProps {
  match: Match;
}

export const MatchCard: FC<MatchCardProps> = ({ match }) => (
  <div className="p-4 bg-white rounded-lg shadow mb-4">
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">Match #{match.id}</h3>
        <p className="text-gray-600">
          {new Date(match.date).toLocaleDateString()}
        </p>
      </div>
      <span className={`px-3 py-1 rounded-full text-sm ${
        match.status === 'UPCOMING' 
          ? 'bg-blue-100 text-blue-800' 
          : 'bg-green-100 text-green-800'
      }`}>
        {match.status}
      </span>
    </div>
  </div>
);