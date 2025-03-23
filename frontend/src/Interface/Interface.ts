export interface Team {
    id: number;
    name: string;
    competition_id: number;
    area_id: number;
  }
  
  export interface Player {
    id: number;
    name: string;
    position: string;
    team_id: number;
  }
  
  export interface Match {
    id: number;
    home_team_id: number;
    away_team_id: number;
    date: string;
    status: 'UPCOMING' | 'COMPLETED';
    competition_id: number;
  }
  
  export interface Area {
    id: number;
    name: string;
    country_code?: string;
  }
  
  export interface FilterField {
    label: string;
    name: string;
    type?: 'text' | 'number' | 'date';
  }

  export interface Competition {
    id: number;
    name: string;
    area_id: number;
  }