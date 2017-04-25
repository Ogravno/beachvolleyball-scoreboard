import {
    FIRST_SET,
    SECOND_SET,
    THIRD_SET,
    AWAYTEAM_POINT,
    HOMETEAM_POINT,
} from './state';


export function getCurrentSetIndex(score) {
    if(!isFirstSetFinished(score)) {
        return FIRST_SET
    }
    if(!isSecondSetFinished(score)) {
        return SECOND_SET;
    }
    if(!isThirdSetFinished(score)) {
        return THIRD_SET;
    }
}

export function getHometeamPointsInCurrentSet(score) {
    const index = getCurrentSetIndex(score)
    return score[index][HOMETEAM_POINT];
}

export function getAwayteamPointsInCurrentSet(score) {
    const index = getCurrentSetIndex(score)
    return score[index][AWAYTEAM_POINT];
}

export function getSetIndexToRemovePointFrom(score) {
    if(isThirdSetStarted(score)) {
        return THIRD_SET
    }
    if(isSecondSetStarted(score)) {
        return SECOND_SET;
    }
    return FIRST_SET;
}

export function isFirstSetFinished(score) {
    return isSetFinished(score.get(FIRST_SET));
}

export function isSecondSetFinished(score) {
    return isSetFinished(score.get(SECOND_SET));
}

export function isThirdSetFinished(score) {
    return isSetFinished(score.get(THIRD_SET));
}

export function isFirstSetStarted(score) {
    return isSetStarted(score.get(FIRST_SET));
}

export function isSecondSetStarted(score) {
    return isSetStarted(score.get(SECOND_SET));
}

export function isThirdSetStarted(score) {
    return isSetStarted(score.get(THIRD_SET));
}

export function isSetStarted(aSet) {
    return (aSet.get(HOMETEAM_POINT) !== 0 && aSet.get(AWAYTEAM_POINT) !== 0)
}

export function isSetFinished(aSet) {
    return (hasHometeamWonSet(aSet)) || (hasAwayteamWonSet(aSet));
}

export function isMatchFinished(score) {
    return (
        hasHometeamWonThirdSet(score) ||
        hasAwayteamWonThirdSet(score) ||
        hasHometeamWonFirstSet(score) && hasHometeamWonSecondSet(score) ||
        hasAwayteamWonFirstSet(score) && hasAwayteamWonSecondSet(score)
    )
}

function hasHometeamWonFirstSet(score) {
    return hasHometeamWonSet(score.get(FIRST_SET));
}

function hasHometeamWonSecondSet(score) {
    return hasHometeamWonSet(score.get(SECOND_SET));
}

function hasHometeamWonThirdSet(score) {
    return hasHometeamWonSet(score.get(THIRD_SET));
}

function hasAwayteamWonFirstSet(score) {
return hasAwayteamWonSet(score.get(FIRST_SET));}

function hasAwayteamWonSecondSet(score) {
    return hasAwayteamWonSet(score.get(SECOND_SET));
}

function hasAwayteamWonThirdSet(score) {
    return hasAwayteamWonSet(score.get(THIRD_SET));
}

function hasAwayteamWonSet(aSet) {    
    const point1 = aSet.get(HOMETEAM_POINT);
    const point2 = aSet.get(AWAYTEAM_POINT);
    const awayteamHas21orMorePoints = point2 >= 21
    const awayteamHas2orMorePointThenHometeam = point2 > (point1 + 1)    
    return awayteamHas21orMorePoints && awayteamHas2orMorePointThenHometeam;
}

function hasHometeamWonSet(aSet) {
    const point1 = aSet.get(HOMETEAM_POINT);
    const point2 = aSet.get(AWAYTEAM_POINT);
    const hometeamHas21orMorePoints = point1 >= 21
    const hometeamHas2orMorePointThenAwayteam = point1 > (point2 + 1)    
    return hometeamHas21orMorePoints && hometeamHas2orMorePointThenAwayteam;
}


