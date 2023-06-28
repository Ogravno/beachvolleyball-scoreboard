import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, CallEffect, delay, put, PutEffect, select, SelectEffect, takeEvery, takeLatest, take, cancelled } from 'redux-saga/effects'
import { TournamentActionTypes, setTournament } from "./actions";
import { Tournament } from '../../components/types';

function* updateTournament(action: PayloadAction<Tournament>): Generator<CallEffect<string> | PutEffect, void, string> {
    try {
      const tournament: Tournament = action.payload
      yield put(setTournament(tournament))
    } catch (error) {
      console.log(error);
    }
  }

export function* tournamentSagas() {
    yield all([
      takeEvery(TournamentActionTypes.UPDATE_TOURNAMENT, updateTournament),
    ])
  }