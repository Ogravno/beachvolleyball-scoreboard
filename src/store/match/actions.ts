import { createAction } from '@reduxjs/toolkit'
import { Actor, NotificationType, Team, Match } from '../../components/types'

// Use explicity string enums, otherwise the react-devtools struggle with identifying the action, as the
// action type then would be numbers
export enum MatchActionTypes {
  ADD_HOME_TEAM = 'ADD_HOME_TEAM',
  ADD_AWAY_TEAM = 'ADD_AWAY_TEAM',

  POINT_SCORED = 'POINT_SCORED',
  ADD_POINT = 'ADD_POINT',
  CALL_TIMEOUT = 'CALL_TIMEOUT',
  SWITCH_SIDES = 'SWITCH_SIDES',

  TECHNICAL_TIMEOUT = 'CALL_TIMEOUT',
  EVALUATE_SCORES = 'EVALUATE_SCORES',

  SHOW_NOTIFICATION = 'SHOW_NOTIFICATION',
  CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION',

  ADD_TEAM_ERROR = 'ADD_TEAM_ERROR',

  GET_MATCH_FETCH = 'GET_MATCH_FETCH',
  GET_MATCH_SUCCESS = 'GET_MATCH_SUCCESS',

  UPDATE_MATCH = 'UPDATE_MATCH',
  SET_MATCH = 'SET_MATCH',
}

export const addHomeTeam = createAction<Team>(MatchActionTypes.ADD_HOME_TEAM)
export const addAwayTeam = createAction<Team>(MatchActionTypes.ADD_AWAY_TEAM)

export const scorePoint = createAction<Actor>(MatchActionTypes.POINT_SCORED)
export const addPoint = createAction<Actor>(MatchActionTypes.ADD_POINT)
export const callTimeout = createAction<Actor>(MatchActionTypes.CALL_TIMEOUT)

export const showNotification = createAction(MatchActionTypes.SHOW_NOTIFICATION)
export const clearNotification = createAction<NotificationType>(MatchActionTypes.CLEAR_NOTIFICATION)

export const evaluateScores = createAction<Actor>(MatchActionTypes.EVALUATE_SCORES)

export const addTeamError = createAction<Error>(MatchActionTypes.ADD_TEAM_ERROR)

export const getMatchFetch = createAction<string>(MatchActionTypes.GET_MATCH_FETCH)
export const getMatchSuccess = createAction<Match>(MatchActionTypes.GET_MATCH_SUCCESS)

export const updateMatch = createAction<Match>(MatchActionTypes.UPDATE_MATCH)
export const setMatch = createAction<Match>(MatchActionTypes.GET_MATCH_SUCCESS)

export type addHomeTeamType = ReturnType<typeof addHomeTeam>
export type addAwayTeamType =  ReturnType<typeof addAwayTeam>

export type scorePointType =  ReturnType<typeof scorePoint>
export type addPointType =  ReturnType<typeof addPoint>
export type callTimeoutType =  ReturnType<typeof callTimeout>

export type showNotificationType =  ReturnType<typeof showNotification>
export type clearNotificationType =  ReturnType<typeof clearNotification>

export type evaluateScoresType =  ReturnType<typeof evaluateScores>

export type addTeamErrorType = ReturnType<typeof addTeamError>

export type getMatchFetchType = ReturnType<typeof getMatchFetch>
export type getMatchSuccessType = ReturnType<typeof getMatchSuccess>

export type updateMatchType = ReturnType<typeof updateMatch>
export type setMatchType = ReturnType<typeof setMatch>
