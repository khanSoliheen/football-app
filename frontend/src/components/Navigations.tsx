import { Link } from 'react-router-dom';

export const Navigation = () => (
  <nav className="bg-pitch-green text-black p-4 shadow-lg">
    <div className="max-w-6xl mx-auto flex items-center justify-between">
      <Link to="/" className="font-heading text-2xl hover:text-stadium-yellow transition-colors">
         FootStats
      </Link>
      <div className="space-x-6">
        <Link to="/matches" className="hover:text-stadium-yellow transition-colors">
          Matches
        </Link>
        <Link to="/teams" className="hover:text-stadium-yellow transition-colors">
          Teams
        </Link>
        <Link to="/players" className="hover:text-stadium-yellow transition-colors">
          Players
        </Link>
        <Link to="/competition" className="hover:text-stadium-yellow transition-colors">
          Competitions
        </Link>
      </div>
    </div>
  </nav>
);