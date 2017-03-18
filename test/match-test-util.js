'use strict';

const util = {};
const Match = require('./../src/js/domain/match');
const Team = require('./../src/js/domain/team');
const Set = require('./../src/js/domain/set');

util.setScoreToTest = function (score = [[21, 19], [19, 21], [14, 14]]) {
	const match = new Match();
	const state = {
		hometeam: new Team('Player1', 'Player2'),
		awayteam: new Team('Player3', 'Player4'),
		sets: score,
		currentSet: score.length - 1,
		currentSetScore: score[score.length - 1]
	};

	match.setPrivateState(state);
	return match;
};

module.exports = util;
