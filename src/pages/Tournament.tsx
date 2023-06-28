import React, { useEffect } from "react"
import { useAppSelector, useAppDispatch } from '../store/store';
import { useParams } from 'react-router';
import { doc, setDoc, updateDoc, onSnapshot, getDocs, collection, getDoc } from "firebase/firestore";
import { db } from '../firebase/firebase-config';
import { Tournament as TournamentType, Match } from '../components/types';
import { updateTournament } from '../store/tournaments/actions';

import AppBarMain from "../components/appbar";
import AppCards from "../components/appCards"
import Grid from "@mui/material/Grid"

import SportsIcon from '@mui/icons-material/Sports';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";

const iconSize = 80

function Tournament() {
    const { tournamentId } = useParams() as { tournamentId: string };
    const dispatch = useAppDispatch()

    const tournament = useAppSelector(state => state.tournament)

    useEffect(() => {
        let tournamentObject: TournamentType = {} as TournamentType
        let matches: Match[] = []

        const unsubscribe = onSnapshot(doc(db, "tournaments", tournamentId), (doc) => {
            if (doc.data()) {
              const tournamentData: TournamentType = doc.data() as TournamentType
              tournamentObject = tournamentData
              console.log("Current data: ", doc.data());
              updateState(tournamentData)
            }
          });

        const updateState = async (tournamentData: any) => {
            const querySnapshot = await getDocs(collection(db, "tournaments", tournamentId, "matches"));
            let matches: Match[] = []
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            matches.push(doc.data() as Match)
            });
            console.log(matches, "matches")
            console.log(tournamentData, "tournamentData")

            dispatch(updateTournament({
                ...tournamentData,
                matches: matches,
            }))
        }

    }, [])

    console.log(tournament)

    return (
        <div>
            <h1>Tournament</h1>
            <h2>{tournament.tournamentName}</h2>
            <Grid container
                justifyContent="center"
                alignItems="center"
                rowSpacing={2}
                spacing={2}
                columns={1}
            >
                {tournament.matches.map((match) => (
                    <Card sx={{ maxWidth: 820, display: 'flex', justifyContent: 'center' }}>
                        <CardActionArea href={"../match/" + match.matchId}>
                            <CardContent sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                <Typography sx={{ fontSize: 24, alignSelf: 'center', textAlign: 'center' }} variant="h1" color="text.secondary" gutterBottom>
                                    {match.homeTeam.player1Name} vs {match.awayTeam.player1Name}
                                </Typography>
                                <Typography sx={{ fontSize: 18, alignSelf: 'center', textAlign: 'center' }} variant="h1" color="text.secondary" gutterBottom>
                                    {match.sets.length} Sets
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Grid>
          </div>
    )
}

export default Tournament;