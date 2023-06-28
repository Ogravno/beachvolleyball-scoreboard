import { createReducer } from "@reduxjs/toolkit"
import { tournamentState } from "../types"
import { TournamentActionTypes, setTournamentType } from "./actions"

const initState = {
    tournamentId: "string",
    tournamentName: "string",
    matches: [],
    teams: [],
}

export const tournamentReducer = createReducer<tournamentState>(initState, {
    [TournamentActionTypes.SET_TOURNAMENT]: (state, action: setTournamentType) => {
        if (action.payload != null) {
          return {
            ...state,
            ...(action.payload as object),
          }
        }
        return {
          ...state,
        }
      }
})