export interface PlayerHistory {
  items: Item[];
  start: number;
  end: number;
  from: number;
  to: number;
}

export interface Item {
  match_id: string;
  game_id: string;
  region: string;
  match_type: string;
  game_mode: string;
  max_players: number;
  teams_size: number;
  teams: Teams;
  playing_players: string[];
  competition_id: string;
  competition_name: string;
  competition_type: string;
  organizer_id: string;
  status: string;
  started_at: number;
  finished_at: number;
  results: Results;
  faceit_url: string;
}

export interface Results {
  winner: string;
  score: Score;
}

export interface Score {
  faction2: number;
  faction1: number;
}

export interface Teams {
  faction1: Faction;
  faction2: Faction;
}

export interface Faction {
  team_id: string;
  nickname: string;
  avatar: string;
  type: string;
  players: Player[];
}

export interface Player {
  player_id: string;
  nickname: string;
  avatar: string;
  skill_level: number;
  game_player_id: string;
  game_player_name: string;
  faceit_url: string;
}
