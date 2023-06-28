import React, { useEffect, useRef } from 'react';
import AddAwayTeam from '../components/addAwayTeam';
import AddHomeTeam from '../components/addHomeTeam';
import { Notification } from '../components/notification';
import Scoreboard from '../components/scoreboard';
import { getMatchFetch, updateMatch } from '../store/match/actions';
import { useAppSelector, useAppDispatch } from '../store/store';
import { useParams } from 'react-router';
import { doc, setDoc, updateDoc, onSnapshot, getDocs, collection, getDoc } from "firebase/firestore";
import { db } from '../firebase/firebase-config';
import { Match as MatchType } from '../components/types';

import { updateTournament } from '../store/tournaments/actions';


function Match() {
  const { matchId } = useParams() as { matchId: string };
  const dispatch = useAppDispatch()

  const homeTeam = useAppSelector(state => state.match.homeTeam)
  const awayTeam = useAppSelector(state => state.match.awayTeam)
  const sets = useAppSelector(state => state.match.sets)
  const match = useAppSelector(state => state.match)
  const matchIdState: string = useAppSelector(state => state.match.matchId)
  const tournament = useAppSelector(state => state.tournament)

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, "tournaments", "1", "matches", matchId), (doc) => {
      if (doc.data()) {
        const matchData: MatchType = doc.data() as MatchType
        dispatch(updateMatch(matchData))
        console.log("Current data: ", doc.data());
      }
    });

    let matches: any = []

    const getDoc1 = async () => {
      const querySnapshot = await getDocs(collection(db, "tournaments", "1", "matches"));

      console.log(querySnapshot)

      matches = querySnapshot.docs.map(doc => doc.data())
      console.log(matches)

      let tournamentInfo: any = {tournamentName: "test", tournamentId: "100", teams: []}

      const docRef = doc(db, "tournaments", "1");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        tournamentInfo = docSnap.data();
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }

      console.log(tournament)
      dispatch(updateTournament({
        ...tournamentInfo,
         matches: matches,
      }))
    }

    getDoc1()
  }, [])

  useEffect(() => {
    console.log(tournament)
  }, [sets])

  return (
    <main>
      {!homeTeam.added && <AddHomeTeam />}
      {(homeTeam.added && !awayTeam.added) && <AddAwayTeam />}
      {(homeTeam.added && awayTeam.added && !match.showNotification) && <Scoreboard />}
      {match.showNotification && <Notification />} 
    </main>
  );

}

export default Match;
