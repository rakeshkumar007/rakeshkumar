var TennisGame1 = function() {
	this.firstPlayerScore = 0;
	this.secondPlayerScore = 0;
};

TennisGame1.prototype.wonPoint = function(playerName) {
	if (playerName === "player1")
		this.firstPlayerScore += 1;
	else
		this.secondPlayerScore += 1;
};

function tieScore() {
	switch (this.firstPlayerScore) {
	case 0:
		return "Love-All";
	case 1:
		return "Fifteen-All";
	case 2:
		return "Thirty-All";
	}

	return "Deuce";
};

function scoreFourOnwards() {

	var scoreDiff = this.firstPlayerScore - this.secondPlayerScore;
	if (scoreDiff === 1)
		return "Advantage player1";
	else if (scoreDiff === -1)
		return "Advantage player2";
	else if (scoreDiff >= 2)
		return "Win for player1";

	return "Win for player2";

};

function tempMapping(tempScore) {
	switch (tempScore) {
	case 0:
		return "Love";
	case 1:
		return "Fifteen";
	case 2:
		return "Thirty";
	case 3:
		return "Forty";
	}

}

TennisGame1.prototype.getScore = function() {
	var score = "";
	var tempScore = 0;
	if (this.firstPlayerScore === this.secondPlayerScore) {

		score = tieScore.call(this);

	} else if (this.firstPlayerScore >= 4 || this.secondPlayerScore >= 4) {

		score = scoreFourOnwards.call(this);

	} else {
		for ( var i = 1; i < 3; i++) {
			if (i === 1)
				tempScore = this.firstPlayerScore;
			else {
				score += "-";
				tempScore = this.secondPlayerScore;
			}
			score += tempMapping(tempScore);
		}
	}
	return score;
};

if (typeof window === "undefined") {
	module.exports = TennisGame1;
}
