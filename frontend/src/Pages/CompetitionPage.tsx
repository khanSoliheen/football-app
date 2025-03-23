import { FC, useState, useEffect } from "react";
import axios from "axios";
import { Filter } from "../components/Filter";
import { Competition } from "../Interface/Interface";
import { CompetitionCard } from "../components/Competition";

export const CompetitionsPage: FC = () => {
  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchCompetitions = async () => {
      try {
        const response = await axios.get<Competition[]>('http://0.0.0.0:3075/api/competitions', { params: filters });
        setCompetitions(response.data);
      } catch (error) {
        console.error("Error fetching competitions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompetitions();
  }, [filters]);

  if (loading) return <div>Loading competitions...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Competitions</h1>
      <Filter
        fields={[
          { label: "Area", name: "area" },
          { label: "League Name", name: "name", type: "text" }
        ]}
        onFilter={setFilters}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {competitions.length ? competitions.map(comp => (
          <CompetitionCard key={comp.id} competition={comp} />
        )) : (
          <div className="text-center py-8 text-gray-500">
            No competitions found matching the filters
          </div>
        )}
      </div>
    </div>
  );
};
