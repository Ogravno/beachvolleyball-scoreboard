import { createAction } from '@reduxjs/toolkit'
import { Tournament } from '../../components/types'

export enum TournamentActionTypes {
    UPDATE_TOURNAMENT = 'UPDATE_TOURNAMENT',
    SET_TOURNAMENT = 'SET_TOURNAMENT',
}

export const updateTournament = createAction<Tournament>(TournamentActionTypes.UPDATE_TOURNAMENT)
export const setTournament = createAction<Tournament>(TournamentActionTypes.SET_TOURNAMENT)

export type updateTournamentType = ReturnType<typeof updateTournament>
export type setTournamentType = ReturnType<typeof setTournament>