import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, CallEffect, delay, put, PutEffect, select, SelectEffect, takeEvery, takeLatest, take, cancelled } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga';
import { Actor, Team, Match } from '../../components/types';
import { addAwayTeam, addHomeTeam, addPoint, addTeamError, evaluateScores, MatchActionTypes, showNotification, getMatchSuccess, setMatch } from "./actions";
import { db } from '../../firebase/firebase-config';
import { doc, getDoc, onSnapshot } from "firebase/firestore";

/*
 * Sagas intercept an action, and then dispatches API calls. When the API call resolves, it either dispatches a success action, or an error action.
 * The sagas below are mostly non-mutative. They call the API with the requested action, and then refetches the integration list after receiving a  succcess,
 * or they set an error in state if they receive an error.
 */

export function* setHomeTeam(action: PayloadAction<Team>): Generator<CallEffect<string> | PutEffect, void, string> {
  try {
    console.log(action.payload);
    put(addHomeTeam(action.payload))
    console.log("Saved home");
  } catch (error) {
    yield put(addTeamError(error as Error))
    // yield put(reportError({error} as {error: Error}))
  }
}

export function* setAwayTeam(action: PayloadAction<Team>): Generator<CallEffect<string> | PutEffect, void, string> {
  try {
    console.log(action.payload);
    put(addAwayTeam(action.payload))
    console.log("Saved away");
  } catch (error) {
    yield put(addTeamError(error as Error))
    // yield put(reportError({error} as {error: Error}))
  }
}

export function* scorePoint(action: PayloadAction<Actor>): Generator<CallEffect | SelectEffect | PutEffect, void, string> {
  try {
    yield put(addPoint(action.payload))
    console.log("Added addPoint");

    yield put(showNotification())
    console.log("Added showNotification");
    let technicalTimeout = yield select(isTechnicalTimeout); // <-- get the project
    console.log("technicalTimeout value:" + technicalTimeout);

    if (technicalTimeout) {
      console.log("startStopwatch");

    }
  } catch (error) {
    yield put(addTeamError(error as Error))
    // yield put(reportError({error} as {error: Error}))
  }
}

export function* startStopwatchSaga(): Generator<CallEffect | SelectEffect | PutEffect, void, string> {

  try {
    console.log("Did tick");
  } catch (error) {
    console.log(error);

    console.log("Could not start tick");
  }
}

export const isTechnicalTimeout = (state: { match: { technicalTimeout: boolean; }; }) => state.match.technicalTimeout

const getMatch: any = async (id: string) => {
  const docRef = doc(db, "matches", id);

  const document = await getDoc(docRef)

  if (document.exists()) {
    return document.data();
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}

function* workGetMatch(action: PayloadAction<string>): Generator<CallEffect<any> | PutEffect, void, Match> {
    const match: Match = yield call(getMatch, action.payload);
    yield put(getMatchSuccess(match))
}

function* updateMatch(action: PayloadAction<Match>): Generator<CallEffect<string> | PutEffect, void, string> {
  try {
    const match: Match = action.payload
    yield put(setMatch(match))
  } catch (error) {
    console.log(error);
  }
}



export function* matchSagas() {
  yield all([
    takeEvery(MatchActionTypes.ADD_HOME_TEAM, setHomeTeam),
    takeEvery(MatchActionTypes.ADD_AWAY_TEAM, setAwayTeam),
    takeEvery(MatchActionTypes.POINT_SCORED, scorePoint),
    takeEvery(MatchActionTypes.GET_MATCH_FETCH, workGetMatch),
    takeEvery(MatchActionTypes.UPDATE_MATCH, updateMatch),
  ])
}
