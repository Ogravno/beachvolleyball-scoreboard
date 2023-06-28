import AddIcon from "@mui/icons-material/Add";
import {
  Add,
  SportsVolleyball,
  Undo,
  Settings
} from '@mui/icons-material';
import {
  CardActions,
  Typography
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useState } from 'react';
import { addPoint, scorePoint, callTimeout } from '../store/match/actions';
import { useAppDispatch, useAppSelector } from '../store/store';
import { LeftMarginBox, VolleyAlert, VolleyAvatar, VolleyCard, VolleyCardHeader, VolleyRowStack, VolleyStack } from "../util/styles";
import { Actor } from './types';
import Grid from "@mui/material/Grid"
import { db } from '../firebase/firebase-config';
import { doc, updateDoc, arrayUnion } from "firebase/firestore";




interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function Scoreboard() {
  const match = useAppSelector((state) => state.match);

  const dispatch = useAppDispatch();
  const [infoCollapse, setInfoCollapse] = useState(false);

  async function homePoint() {
    // dispatch(scorePoint(Actor.HomeTeam));

    const sets = match.sets.map((set, index) => {
      if (index === match.currentSet) {
        return {
          ...set,
          homeTeamScore: set.homeTeamScore + 1
        }
      }
      return set
    })

    await updateDoc(doc(db, "tournaments", "1", "matches", match.matchId), {
      sets: sets,
    });
  }

  async function awayPoint() {
    // dispatch(scorePoint(Actor.AwayTeam));

    const sets = match.sets.map((set, index) => {
      if (index === match.currentSet) {
        return {
          ...set,
          awayTeamScore: set.awayTeamScore + 1
        }
      }
      return set
    })

    await updateDoc(doc(db, "tournaments", "1", "matches", match.matchId), {
      sets: sets,
    });
  }

  function homeTeamTimeout() {
    dispatch(callTimeout(Actor.HomeTeam));
  }

  function awayTeamTimeout() {
    dispatch(callTimeout(Actor.AwayTeam));
  }

  function toggleInfo() {
    setInfoCollapse(!infoCollapse);
  }

  return (
    <Grid container
      justifyContent="center"
      alignItems="center"
      rowSpacing={0}
      spacing={2}
      columns={12}
    >
      <Grid item xs={12}>
        <Grid container
          spacing={2}
          columns={12}
          sx={{ alignSelf: 'center', textAlign: 'center' }}
        >
          <Grid item xs={4} >
            <Button variant="outlined" onClick={awayPoint} sx={{ color: 'black' }}>
              <Undo sx={{ fontSize: 52 }} />
            </Button>
          </Grid>
          <Grid item xs={4}>
            clock
          </Grid>
          <Grid item xs={4}>
            <Button variant="outlined" onClick={awayPoint} sx={{ color: 'black' }}>
              <Settings sx={{ fontSize: 52 }} />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container
          spacing={2}
          columns={42}
          justifyContent="space-between"
          sx={{ alignSelf: 'center', textAlign: 'center' }}
        >
          <Grid item xs={20} sx={{ textAlign: 'right' }}>
            <Grid container
              spacing={2}
              justifyContent="space-between"
              alignItems="flex-end"
              columns={12}
            >
              <Grid item xs={4}>
                <Typography align='center' sx={{
                  border: 4, borderRadius: '12px', borderColor: 'primary.main',
                  fontSize: 42, variant: 'button', lineHeight: 1, paddingTop: 1
                }}>
                  0
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography align='right' sx={{
                  border: 6, borderRadius: '12px', borderColor: 'primary.main',
                  fontSize: 84, variant: 'button', lineHeight: 1, paddingTop: 2
                }}>
                  {match.sets[match.currentSet].homeTeamScore}
                </Typography>
              </Grid>

            </Grid>

          </Grid>
          <Grid item xs={20} sx={{ textAlign: 'left' }}>
            <Grid container
              spacing={2}
              justifyContent="space-between"
              alignItems="flex-end"
              columns={12}
            >
              <Grid item xs={8}>
                <Typography align='left' sx={{
                  border: 6, borderRadius: '12px', borderColor: 'secondary.main',
                  fontSize: 84, variant: 'button', lineHeight: 1, paddingTop: 2,
                }}>
                  {match.sets[match.currentSet].awayTeamScore}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography align='center' sx={{
                  border: 4, borderRadius: '12px', borderColor: 'secondary.main',
                  fontSize: 42, variant: 'button', lineHeight: 1, paddingTop: 1
                }}>
                  0
                </Typography>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container
          spacing={2}
          columns={12}
          sx={{ alignSelf: 'center', textAlign: 'center' }}
        >
          <Grid item xs={5} sx={{ textAlign: 'right' }}>
            <Typography sx={{ fontSize: 18 }}>{match.homeTeam.player1Name}</Typography>
          </Grid>
          <Grid item xs={1} sx={{ textAlign: 'left' }}>

          </Grid>
          <Grid item xs={1} sx={{ textAlign: 'right' }}>

          </Grid>
          <Grid item xs={5} sx={{ textAlign: 'left' }}>
            <Typography sx={{ fontSize: 18 }}>{match.awayTeam.player1Name}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container
          spacing={2}
          columns={12}
          sx={{ alignSelf: 'center', textAlign: 'center' }}
        >
          <Grid item xs={5} sx={{ textAlign: 'right' }}>
            <Typography sx={{ fontSize: 18 }}>{match.homeTeam.player2Name}</Typography>
          </Grid>
          <Grid item xs={1} sx={{ textAlign: 'left' }}>

          </Grid>
          <Grid item xs={1} sx={{ textAlign: 'right' }}>
            <SportsVolleyball sx={{ fontSize: 18 }} />
          </Grid>
          <Grid item xs={5} sx={{ textAlign: 'left' }}>
            <Typography sx={{ fontSize: 18 }}>{match.awayTeam.player2Name}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container
          spacing={2}
          columns={12}
          sx={{ alignSelf: 'center', textAlign: 'center' }}
        >
          <Grid item xs={5} sx={{ textAlign: 'right' }}>
            <Button variant="contained" onClick={homePoint}
              sx={{ width: 1, height: 84, backgroundColor: 'primary.main' }}>
              <Add sx={{ fontSize: 84 }} />
            </Button>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={5} sx={{ textAlign: 'left' }}>
            <Button variant="contained" onClick={awayPoint} 
            sx={{ width: 1, height: 84, backgroundColor: 'secondary.main' }}>
              <Add sx={{ fontSize: 84 }} />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container
          spacing={2}
          columns={12}
          sx={{ alignSelf: 'center', textAlign: 'center' }}
        >
          <Grid item xs={5} sx={{ textAlign: 'right' }}>
            <Button disabled={match.homeTimeout} onClick={homeTeamTimeout} variant="contained" 
            sx={{ width: 1, textTransform: 'none' , backgroundColor: 'primary.main'}}>
              <Typography sx={{ fontSize: 18 }}> TIMEOUT</Typography>
            </Button>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={5} sx={{ textAlign: 'left' }}>
            <Button disabled={match.awayTimeout} onClick={awayTeamTimeout} variant="contained" 
            sx={{ width: 1, textTransform: 'none', backgroundColor: 'secondary.main' }}>
              <Typography sx={{ fontSize: 18 }}> TIMEOUT</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        { match.events.slice(0).reverse().map((event, index) => {
          return (
            <Typography key={index} sx={{ fontSize: 18 }}>
              {`${new Date(event.timestamp.seconds * 1000).toLocaleTimeString('en-GB')} ${event.actor} ${event.eventType}`}
            </Typography>
          )
        })}
      </Grid>
    </Grid>
  );
}

export default Scoreboard;
