import { Record, List } from "immutable";

export const TOURNAMENT_PATH = "/tournaments";
export const MATCH_PATH = "/matches/";
export const TOURNAMENT_PRIVATE_ID = "TOURNAMENT_PRIVATE_ID";
export const MATCH_FIREBASE_KEY = "MATCH_FIREBASE_KEY";
export const SHOW_TO = "SHOW_TO";
export const SHOW_TOURNAMENT_COMPONENT = "SHOW_TOURNAMENT_COMPONENT";
export const EMAIL = "EMAIL";
export const SHOW_EMAIL_DIALOG = "SHOW_EMAIL_DIALOG";
export const COMMENTS = "COMMENTS";
export const FIRST_SET = "FIRST_SET";
export const SECOND_SET = "SECOND_SET";
export const THIRD_SET = "THIRD_SET";
export const MATCH = "MATCH";
export const HOMETEAM_FIRST_PLAYER_NAME = "HOMETEAM_FIRST_PLAYER_NAME";
export const HOMETEAM_SECOND_PLAYER_NAME = "HOMETEAM_SECOND_PLAYER_NAME";
export const AWAYTEAM_FIRST_PLAYER_NAME = "AWAYTEAM_FIRST_PLAYER_NAME";
export const AWAYTEAM_SECOND_PLAYER_NAME = "AWAYTEAM_SECOND_PLAYER_NAME";
export const HOMETEAM_COLOR = "HOMETEAM_COLOR";
export const AWAYTEAM_COLOR = "AWAYTEAM_COLOR";
export const HISTORY = "HISTORY";
export const ACTION_HISTORY = "ACTION_HISTORY";
export const MATCH_ID = "MATCH_ID";
export const SHOW_COMPONENT = "SHOW_COMPONENT";
export const ADD_AWAYTEAM_COMPONENT = "ADD_AWAYTEAM_COMPONENT";
export const ADD_HOMETEAM_COMPONENT = "ADD_HOMETEAM_COMPONENT";
export const SCOREBOARD_COMPONENT = "SCOREBOARD_COMPONENT";
export const LOADING_COMPONENT = "LOADING_COMPONENT";
export const FIRST_SET_HOMETEAM_TIMEOUT = "FIRST_SET_HOMETEAM_TIMEOUT";
export const FIRST_SET_AWAYTEAM_TIMEOUT = "FIRST_SET_AWAYTEAM_TIMEOUT";
export const SECOND_SET_HOMETEAM_TIMEOUT = "SECOND_SET_HOMETEAM_TIMEOUT";
export const SECOND_SET_AWAYTEAM_TIMEOUT = "SECOND_SET_AWAYTEAM_TIMEOUT";
export const THIRD_SET_HOMETEAM_TIMEOUT = "THIRD_SET_HOMETEAM_TIMEOUT";
export const THIRD_SET_AWAYTEAM_TIMEOUT = "THIRD_SET_AWAYTEAM_TIMEOUT";
export const SWITCH_NOW = "SWITCH_NOW";
export const DEFAULT_SWITCH_EVERY_X_POINT = "DEFAULT_SWITCH_EVERY_X_POINT";
export const LAST_SET_SWITCH_EVERY_X_POINT = "LAST_SET_SWITCH_EVERY_X_POINT";
export const TTO_POINT = "TTO_POINT";
export const DEFAULT_TIMEOUT_PER_SET = "DEFAULT_TIMEOUTS_PER_SET";
export const DEFAULT_SET_LENGTH = "SET_LENGTH";
export const LAST_SET_LENGTH = "LAST_SET_LENGTH";
export const SERVICE_ORDER = "SERVICE_ORDER";
export const PLAYER_TO_SERVE = "PLAYER_TO_SERVE";
export const FIRST_TEAM_TO_SERVE = "FIRST_TEAM_TO_SERVE";
export const SERVICE_ORDER_IS_SET = "SERVICE_ORDER_IS_SET";
export const SHOW_SERVICE_ORDER_DIALOG_TEAM = "SHOW_SERVICE_ORDER_DIALOG_TEAM";
export const SHOW_SERVICE_ORDER_DIALOG_PLAYER_1 =
  "SHOW_SERVICE_ORDER_DIALOG_PLAYER_1";
export const SHOW_SERVICE_ORDER_DIALOG_PLAYER_2 =
  "SHOW_SERVICE_ORDER_DIALOG_PLAYER_2";
export const AWAYTEAM = "AWAYTEAM";
export const HOMETEAM = "HOMETEAM";
export const SET_HAS_STARTED = "SET_HAS_STARTED";
export const AWAYTEAM_POINT = "AWAYTEAM_POINT";
export const HOMETEAM_POINT = "HOMETEAM_POINT";
export const HOMETEAM_TIMEOUT_TAKEN = "HOMETEAM_TIMEOUT_TAKEN";
export const AWAYTEAM_TIMEOUT_TAKEN = "AWAYTEAM_TIMEOUT_TAKEN";
export const MATCH_IS_FINISED = "MATCH_IS_FINISED";
export const DATE = "DATE";
export const VALUE = "VALUE";
export const MATCHSTATE = "MATCHSTATE";
export const ACTION = "ACTION";
export const UNDO = "UNDO";
export const CURRENT_SET = "CURRENT_SET";
export const SHOW_SERVICE_ORDER_DIALOG_PLAYER_HOMETEAM =
  "SHOW_SERVICE_ORDER_DIALOG_PLAYER_HOMETEAM";
export const SHOW_SERVICE_ORDER_DIALOG_PLAYER_AWAYTEAM =
  "SHOW_SERVICE_ORDER_DIALOG_PLAYER_AWAYTEAM";
export const SERVICE_ORDER_HOMETEAM = "SERVICE_ORDER_HOMETEAM";
export const SERVICE_ORDER_AWAYTEAM = "SERVICE_ORDER_AWAYTEAM";
export const SHOW_SWITCH = "SHOW_SWITCH";
export const SHOW_TTO = "SHOW_TTO";
export const SHOW_MATCH_FINISHED = "SHOW_MATCH_FINISHED";
export const SHOW_SET_FINISHED = "SHOW_SET_FINISHED";
export const SHOW_COMMENTS_DIALOG = "SHOW_COMMENTS_DIALOG";
export const WINNER = "WINNER";
export const SETS_HOMETEAM = "SETS_HOMETEAM";
export const SETS_AWAYTEAM = "SETS_AWAYTEAM";
export const POINTS_IN_SETS = "POINTS_IN_SETS";
export const MATCH_FINISHED_TIMESTAMP = "MATCH_FINISHED_TIMESTAMP";

export const BeachVolleyballSet = Record({
  [HOMETEAM_POINT]: 0,
  [AWAYTEAM_POINT]: 0,
  [HOMETEAM_TIMEOUT_TAKEN]: false,
  [AWAYTEAM_TIMEOUT_TAKEN]: false,
  [PLAYER_TO_SERVE]: "",
  [SERVICE_ORDER_IS_SET]: false,
  [FIRST_TEAM_TO_SERVE]: "",
  [SERVICE_ORDER_HOMETEAM]: List(),
  [SERVICE_ORDER_AWAYTEAM]: List()
});


export const ActionHistory = Record({
  [DATE]: new Date(),
  [ACTION]: "",
  [VALUE]: "",
  [HOMETEAM_POINT]: "",
  [AWAYTEAM_POINT]: "",
  [CURRENT_SET]: ""
});

export const Match = Record({
  [MATCH_FINISHED_TIMESTAMP]: "",
  [MATCH_FIREBASE_KEY]: "",
  [MATCH_ID]: "",
  [TOURNAMENT_PRIVATE_ID]: "",
  [EMAIL]: "",
  [FIRST_SET]: new BeachVolleyballSet(),
  [SECOND_SET]: new BeachVolleyballSet(),
  [THIRD_SET]: new BeachVolleyballSet(),
  [SWITCH_NOW]: false,
  [SET_HAS_STARTED]: false,
  [DEFAULT_SET_LENGTH]: 21,
  [LAST_SET_LENGTH]: 15,
  [DEFAULT_SWITCH_EVERY_X_POINT]: 7,
  [LAST_SET_SWITCH_EVERY_X_POINT]: 5,
  [HOMETEAM_FIRST_PLAYER_NAME]: "",
  [HOMETEAM_SECOND_PLAYER_NAME]: "",
  [HOMETEAM_COLOR]: "#004499",
  [SERVICE_ORDER_IS_SET]: false,
  [AWAYTEAM_FIRST_PLAYER_NAME]: "",
  [AWAYTEAM_SECOND_PLAYER_NAME]: "",
  [AWAYTEAM_COLOR]: "#44ff00",
  [FIRST_TEAM_TO_SERVE]: "",
  [SERVICE_ORDER]: List(),
  [PLAYER_TO_SERVE]: "",
  [SHOW_COMPONENT]: LOADING_COMPONENT,
  [MATCH_IS_FINISED]: false,
  [HOMETEAM_TIMEOUT_TAKEN]: false,
  [AWAYTEAM_TIMEOUT_TAKEN]: false,
  [COMMENTS]: List()
});

export const Action = Record({
  [DATE]: new Date(),
  [ACTION]: "",
  [VALUE]: "",
  [MATCHSTATE]: Match
});


export const State = Record({
  [MATCH]: new Match(),
  [ACTION_HISTORY]: List(),
  [HISTORY]: List()
});

export const constants = {
  MATCH_FINISHED_TIMESTAMP,
  SETS_AWAYTEAM,
  SETS_HOMETEAM,
  POINTS_IN_SETS,
  WINNER,
  MATCH_PATH,
  TOURNAMENT_PATH,
  TOURNAMENT_PRIVATE_ID,
  SHOW_TOURNAMENT_COMPONENT,
  SHOW_TO,
  EMAIL,
  SHOW_EMAIL_DIALOG,
  COMMENTS,
  SHOW_COMMENTS_DIALOG,
  FIRST_SET,
  SECOND_SET,
  THIRD_SET,
  MATCH,
  HOMETEAM_FIRST_PLAYER_NAME,
  HOMETEAM_SECOND_PLAYER_NAME,
  AWAYTEAM_FIRST_PLAYER_NAME,
  AWAYTEAM_SECOND_PLAYER_NAME,
  HOMETEAM_COLOR,
  AWAYTEAM_COLOR,
  HISTORY,
  ACTION_HISTORY,
  MATCH_ID,
  SHOW_COMPONENT,
  ADD_AWAYTEAM_COMPONENT,
  ADD_HOMETEAM_COMPONENT,
  SCOREBOARD_COMPONENT,
  LOADING_COMPONENT,
  FIRST_SET_HOMETEAM_TIMEOUT,
  FIRST_SET_AWAYTEAM_TIMEOUT,
  SECOND_SET_HOMETEAM_TIMEOUT,
  SECOND_SET_AWAYTEAM_TIMEOUT,
  THIRD_SET_HOMETEAM_TIMEOUT,
  THIRD_SET_AWAYTEAM_TIMEOUT,
  SWITCH_NOW,
  DEFAULT_SWITCH_EVERY_X_POINT,
  LAST_SET_SWITCH_EVERY_X_POINT,
  TTO_POINT,
  DEFAULT_TIMEOUT_PER_SET,
  DEFAULT_SET_LENGTH,
  LAST_SET_LENGTH,
  SERVICE_ORDER,
  PLAYER_TO_SERVE,
  FIRST_TEAM_TO_SERVE,
  SERVICE_ORDER_IS_SET,
  SHOW_SERVICE_ORDER_DIALOG_TEAM,
  SHOW_SERVICE_ORDER_DIALOG_PLAYER_HOMETEAM,
  SHOW_SERVICE_ORDER_DIALOG_PLAYER_AWAYTEAM,
  AWAYTEAM,
  HOMETEAM,
  SET_HAS_STARTED,
  AWAYTEAM_POINT,
  HOMETEAM_POINT,
  HOMETEAM_TIMEOUT_TAKEN,
  AWAYTEAM_TIMEOUT_TAKEN,
  MATCH_IS_FINISED,
  DATE,
  VALUE,
  MATCHSTATE,
  ACTION,
  UNDO,
  CURRENT_SET,
  SERVICE_ORDER_HOMETEAM,
  SHOW_MATCH_FINISHED,
  SERVICE_ORDER_AWAYTEAM,
  SHOW_SWITCH,
  SHOW_SET_FINISHED,
  MATCH_FIREBASE_KEY
};

export default State;
