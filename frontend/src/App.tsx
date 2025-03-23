import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MatchesPage } from './Pages/MatchesPage';
import { PlayersPage } from './Pages/PlayerPage';
import { TeamsPage } from './Pages/TeamsPage';
import { Navigation } from './components/Navigations';
import { PlayerDetailsPage } from './Pages/PlayerDetailPage';
import { CompetitionsPage } from './Pages/CompetitionPage';

export const App: FC = () => (
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/teams" element={<TeamsPage />} />
      <Route path="/matches" element={<MatchesPage />} />
      <Route path="/players" element={<PlayersPage />} />
      <Route path="/competition" element={<CompetitionsPage />} />
      <Route path="/player/:id" element={<PlayerDetailsPage />} />
    </Routes>
  </BrowserRouter>
);