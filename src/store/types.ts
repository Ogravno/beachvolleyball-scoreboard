import { type } from "os";
import { Team, Event, Set, Match } from "../components/types";

export type matchState = {
  homeTeam: Team,
  awayTeam: Team,
  matchId: string,
  tournementId: number,
  currentSet: number,
  homeTimeout: boolean,
  awayTimeout: boolean,
  finished: boolean,
  showNotification: boolean,
  technicalTimeout: boolean,
  teamTimeout: boolean,
  switchSide: boolean,
  events: Event[],
  sets: Set[],
  shouldUpdate: boolean,
  errorMessage: Error|null,
}

export type matchesState = {
  matches: Match[],
  lastUpdated: Date,
  errorMessage: Error|null,
}

export type tournamentState = {
  tournamentId: string,
  tournamentName: string,
  matches: Match[],
  teams: Team[],
}