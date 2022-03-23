

class KnockoutGame {
    constructor() {
        // Choose a random number between 6 and 9.
        this.knockoutNumber = (Math.random() * 4 + 6) | 0;
        this.playerRoll = 0;
        this.computerRoll = 0;
        this.winner = 0;
        this.knockoutDiv = document.getElementById('koKnockoutNumber');
        this.knockoutDiv.innerHTML = "The knockout number is <b>" + this.knockoutNumber.toString() + "</b>.";
        this.playerRollDiv = document.getElementById('koPlayerRoll');
        this.playerRollDiv.innerHTML = ' ';
        this.computerRollDiv = document.getElementById('koComputerRoll');
        this.computerRollDiv.innerHTML = ' ';
    }

    rollPair() {
        const die1 = (Math.random() * 6 + 1) | 0;
        const die2 = (Math.random() * 6 + 1) | 0;
        return die1 + die2;
    }

    roll() {
        const koStatus = document.getElementById('koStatus');

        // If we have a winner, then the game needs to be reset.
        if (this.winner != 0) {
            koStatus.innerHTML = "Press reset to play again.";
        }
        else {
            koStatus.innerHTML = "Click roll to play your turn.";
        }

        // Roll for the player.
        this.playerRoll = this.rollPair();
        this.playerRollDiv.innerHTML = "You rolled a <b>" + this.playerRoll.toString() + "</b>.";
        if (this.playerRoll == this.knockoutNumber) {
            this.winner = 1;
            koStatus.innerHTML = "You won!";
            return;
        }

        // Roll for the computer.
        this.computerRoll = rollDie(1, 7);
        this.computerRollDiv.innerHTML = "The computer rolled a <b>" + this.computerRoll.toString() + "</b>.";
        if (this.computerRoll == this.knockoutNumber) {
            this.winner = 2;
            koStatus.innerHTML = "The computer won!";
            return;
        }
    }
}

let KO = new KnockoutGame();
