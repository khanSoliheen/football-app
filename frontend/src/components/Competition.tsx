import { FC } from "react";
import { Competition } from "../Interface/Interface";

interface CompetitionCardProps {
  competition: Competition;
}

export const CompetitionCard: FC<CompetitionCardProps> = ({ competition }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold">{competition.name}</h3>
      <p className="text-gray-600">Area: {competition.area_id}</p>
      <p className="text-gray-600">League Name: {competition.name}</p>
    </div>
  );
};
