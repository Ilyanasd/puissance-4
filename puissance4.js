// export class Game {
//     constructor() {
//         this.joueur1 = "Rouge";
//         this.joueur2 = "Jaune";
//         this.rolejoueur = this.joueur1;
//         this.gameOver = false;
//         this.rows = 6;
//         this.columns = 7;
//         this.game = [];
//         this.currColumns = new Array(this.columns).fill(this.rows - 1);
//         this.init();
//     }

//     init() {
//         window.onload = () => {
//             this.setGame();
//             document.getElementById("restart").addEventListener("click", () => this.restartGame());
//         };
//     }

//     restartGame() {
//         const gameContainer = document.getElementById("gameContainer");
//         while (gameContainer.firstChild) {
//             gameContainer.removeChild(gameContainer.firstChild);
//         }
//         this.gameOver = false;
//         this.rolejoueur = this.joueur1;
//         this.setGame();
//         document.getElementById("winner").innerText = "";
//     }

//     setGame() {
//         this.game = [];
//         this.currColumns.fill(this.rows - 1);
//         const gameContainer = document.getElementById("gameContainer");
//         gameContainer.innerHTML = '';
//         for (let r = 0; r < this.rows; r++) {
//             const row = [];
//             for (let c = 0; c < this.columns; c++) {
//                 row.push(' ');
//                 const tile = document.createElement("div");
//                 tile.id = `${r}-${c}`;
//                 tile.classList.add("tile");
//                 tile.addEventListener("click", () => this.setPiece(r, c));
//                 gameContainer.appendChild(tile);
//             }
//             this.game.push(row);
//         }
//         document.getElementById("couleur-du-joueur").innerText = this.rolejoueur;
//     }

//     setPiece(r, c) {
//         if (this.gameOver) {
//             return;
//         }
//         r = this.currColumns[c];
//         if (r < 0) {
//             return;
//         }
//         this.game[r][c] = this.rolejoueur;
//         const tile = document.getElementById(`${r}-${c}`);
//         if (this.rolejoueur === this.joueur1) {
//             tile.classList.add("red-piece");
//             this.rolejoueur = this.joueur2;
//         } else {
//             tile.classList.add("yellow-piece");
//             this.rolejoueur = this.joueur1;
//         }
//         this.currColumns[c] = r - 1;
//         this.checkWinner();
//         document.getElementById("couleur-du-joueur").innerText = this.rolejoueur;
//     }

//     checkWinner() {
//         for (let r = 0; r < this.rows; r++) {
//             for (let c = 0; c < this.columns - 3; c++) {
//                 if (this.game[r][c] !== ' ' && this.game[r][c] === this.game[r][c + 1] && this.game[r][c + 1] === this.game[r][c + 2] && this.game[r][c + 2] === this.game[r][c + 3]) {
//                     this.setWinner(r, c);
//                     return;
//                 }
//             }
//         }

//         for (let c = 0; c < this.columns; c++) {
//             for (let r = 0; r < this.rows - 3; r++) {
//                 if (this.game[r][c] !== ' ' && this.game[r][c] === this.game[r + 1][c] && this.game[r + 1][c] === this.game[r + 2][c] && this.game[r + 2][c] === this.game[r + 3][c]) {
//                     this.setWinner(r, c);
//                     return;
//                 }
//             }
//         }

//         for (let r = 0; r < this.rows - 3; r++) {
//             for (let c = 0; c < this.columns - 3; c++) {
//                 if (this.game[r][c] !== ' ' && this.game[r][c] === this.game[r + 1][c + 1] && this.game[r + 1][c + 1] === this.game[r + 2][c + 2] && this.game[r + 2][c + 2] === this.game[r + 3][c + 3]) {
//                     this.setWinner(r, c);
//                     return;
//                 }
//             }
//         }

//         for (let r = 3; r < this.rows; r++) {
//             for (let c = 0; c < this.columns - 3; c++) {
//                 if (this.game[r][c] !== ' ' && this.game[r][c] === this.game[r - 1][c + 1] && this.game[r - 1][c + 1] === this.game[r - 2][c + 2] && this.game[r - 2][c + 2] === this.game[r - 3][c + 3]) {
//                     this.setWinner(r, c);
//                     return;
//                 }
//             }
//         }
//     }

//     setWinner(r, c) {
//         const Winner = document.getElementById("winner");
//         Winner.innerText = this.game[r][c] === this.joueur1 ? "Red Wins" : "Yellow Wins";
//         this.gameOver = true;
//     }
// }

// new ConnectFourGame();




class Puissance4 {
    constructor(selector, options) {
        this.selector = selector;
        this.rows = options.rows || 6;
        this.columns = options.columns || 7;
        this.joueur1 = options.joueur1 || 'Rouge';
        this.joueur2 = options.joueur2 || 'Jaune';
        if (this.joueur1 === this.joueur2) {
            throw new Error("Les joueurs ne peuvent pas avoir la même couleur !");
        }
        this.rolejoueur = this.joueur1;
        this.gameOver = false;
        this.game = [];
        this.currColumns = new Array(this.columns).fill(this.rows - 1);
        this.init();
    }

    init() {
        window.onload = () => {
            this.setGame();
            document.getElementById("restart").addEventListener("click", () => this.restartGame());
        };
    }

    restartGame() {
        const gameContainer = document.querySelector(this.selector);
        while (gameContainer.firstChild) {
            gameContainer.removeChild(gameContainer.firstChild);
        }
        this.gameOver = false;
        this.rolejoueur = this.joueur1;
        this.setGame();
        document.getElementById("winner").innerText = "";
    }

    setGame() {
        this.game = [];
        this.currColumns = new Array(this.columns).fill(this.rows - 1);
        const gameContainer = document.querySelector(this.selector);
        gameContainer.innerHTML = '';
        for (let r = 0; r < this.rows; r++) {
            const row = [];
            for (let c = 0; c < this.columns; c++) {
                row.push(' ');
                const tile = document.createElement("div");
                tile.id = r.toString() + "-" + c.toString();
                tile.classList.add("tile");
                tile.addEventListener("click", () => this.setPiece(r, c));
                gameContainer.appendChild(tile);
            }
            this.game.push(row);
        }
        document.getElementById("couleur-du-joueur").innerText = this.rolejoueur;
    }

    setPiece(r, c) {
        if (this.gameOver) return;
        const color = this.rolejoueur === this.joueur1 ? this.joueur1 : this.joueur2;
        if (this.currColumns[c] < 0) return;
        this.game[this.currColumns[c]][c] = color;
        const tile = document.getElementById(this.currColumns[c].toString() + "-" + c.toString());
        tile.classList.add(color === this.joueur1 ? "red-piece" : "yellow-piece");
        this.rolejoueur = (this.rolejoueur === this.joueur1) ? this.joueur2 : this.joueur1;
        this.currColumns[c]--;
        this.checkWinner();
        document.getElementById("couleur-du-joueur").innerText = this.rolejoueur;
    }

checkWinner() {
    for (let r = 0; r < this.rows; r++) {
        for (let c = 0; c < this.columns - 3; c++) {
            if (this.game[r][c] !== ' ') {
                if (this.game[r][c] === this.game[r][c + 1] && this.game[r][c + 1] === this.game[r][c + 2] && this.game[r][c + 2] === this.game[r][c + 3]) {
                    this.setWinner(r, c);
                    return;
                }
            }
        }
    }

    for (let c = 0; c < this.columns; c++) {
        for (let r = 0; r < this.rows - 3; r++) {
            if (this.game[r][c] !== ' ') {
                if (this.game[r][c] === this.game[r + 1][c] && this.game[r + 1][c] === this.game[r + 2][c] && this.game[r + 2][c] === this.game[r + 3][c]) {
                    this.setWinner(r, c);
                    return;
                }
            }
        }
    }

    for (let r = 0; r < this.rows - 3; r++) {
        for (let c = 0; c < this.columns - 3; c++) {
            if (this.game[r][c] !== ' ') {
                if (this.game[r][c] === this.game[r + 1][c + 1] && this.game[r + 1][c + 1] === this.game[r + 2][c + 2] && this.game[r + 2][c + 2] === this.game[r + 3][c + 3]) {
                    this.setWinner(r, c);
                    return;
                }
            }
        }
    }

    for (let r = 3; r < this.rows; r++) {
        for (let c = 0; c < this.columns - 3; c++) {
            if (this.game[r][c] !== ' ') {
                if (this.game[r][c] === this.game[r - 1][c + 1] && this.game[r - 1][c + 1] === this.game[r - 2][c + 2] && this.game[r - 2][c + 2] === this.game[r - 3][c + 3]) {
                    this.setWinner(r, c);
                    return;
                }
            }
        }
    }
}

    setWinner(r, c) {
        const Winner = document.getElementById("winner");
        Winner.innerText = this.game[r][c] === this.joueur1 ? "Player 1 Wins" : "Player 2 Wins";
        this.gameOver = true;
    }
}

window.Puissance4 = Puissance4;
