import * as wasm from "front-end";

export class TicTacToe {
    #body = document.querySelector('body');
    #game = document.createElement('div');

    #emptyGrid = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ]

    #grid = this.#emptyGrid;
    #player = false;

    constructor() {
        this.#game.classList.add("game");
        this.#body.append(this.#game);

        this._createPlayerChoice();
    }

    // This function creates the player selector in the DOM.
    _createPlayerChoice() {
        const choiceContainer = document.createElement('div');
        choiceContainer.classList.add("choice-container");

        const choiceCross = document.createElement('button');
        const choiceCircle = document.createElement('button');

        choiceCross.classList.add('choice-cross');
        choiceCircle.classList.add('choice-circle');

        choiceContainer.appendChild(choiceCross);
        choiceContainer.appendChild(choiceCircle);

        choiceCross.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d=\"M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z\"/></svg>";
        choiceCircle.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d=\"M528 320C528 205.1 434.9 112 320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z\"/></svg>"

        this.#game.appendChild(choiceContainer);


        choiceCross.addEventListener('click', () => {
            this._choosePlayer(false);
        });

        choiceCircle.addEventListener('click', () => {
            this._choosePlayer(true);
        })
    }

    _choosePlayer(player) {
        this.#player = player;

        this._updateGrid();
    }

    _updateGrid() {
        this.#game.innerHTML = "";
        const grid = document.createElement('div');
        grid.classList.add('grid');

        for(let x = 0; x < 3; x ++) {
            for(let y = 0; y < 3; y ++) {
                const box = document.createElement('div');
                box.classList.add('game-box');

                box.addEventListener('click', () => {
                    this._play(x, y);
                });

                if (this.#grid[x][y] == 1) {
                    box.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d=\"M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z\"/></svg>";
                } else if (this.#grid[x][y] == 2) {
                    box.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d=\"M528 320C528 205.1 434.9 112 320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z\"/></svg>";
                }

                grid.appendChild(box);
            }
        }

        this.#game.appendChild(grid);
    }

    _play(x, y) {
        if (this.#grid[x][y] !== 0) {
            return;
        }

        this.#grid[x][y] = this.#player ? 2 : 1;

        this._updateGrid();

        if (this._checkWinner()) {
            return;
        }

        console.log("old grid = ", this.#grid.flat());

        const newGrid = wasm.compute_next_move(this.#grid.flat(), !this.#player);

        console.log("new grid = ", newGrid);

        for (let y = 0; y < 3; y++) {
            for (let x = 0; x < 3; x ++) {
                this.#grid[y][x] = newGrid[(y * 3) + x];
            }
        }

        this._updateGrid();

        if (this._checkWinner()) {
            return;
        }
    }

    _checkWinner() {
        let diag1 = [];
        let diag2 = [];
        for(let a = 0; a < 3; a++) {
            let line = [];
            let col = [];
            
            diag1.push(this.#grid[a][a]);
            diag2.push(this.#grid[a][2 - a])

            for(let b = 0; b < 3; b++) {
                line.push(this.#grid[a][b]);
                col.push(this.#grid[b][a]);
            }

            if (line.every(v => v === line[0])) {
                if (line[0] !== 0) {
                    this._displayWinner(line[0]);
                    return true;
                }
            }

            if (col.every(v => v === col[0])) {
                if (col[0] !== 0) {
                    this._displayWinner(col[0]);
                    return true;
                }
            }
        }

        if (diag1.every(v => v === diag1[0])) {
            if (diag1[0] !== 0) {
                this._displayWinner(diag1[0]);
                return true;
            }
        }

        if (diag2.every(v => v === diag2[0])) {
            if (diag2[0] !== 0) {
                this._displayWinner(diag2[0]);
                return true;
            }
        }

        return false;
    }

    _displayWinner(winner) {
        this.#game.innerHTML = "";

        const winnerContainer = document.createElement('div');
        winnerContainer.classList.add("winner-container");

        const winnerDisplay = document.createElement('div');
        winnerDisplay.classList.add("winner-display");

        if (winner === 1) {
            winnerDisplay.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d=\"M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z\"/></svg>";
        } else if (winner === 2) {
            winnerDisplay.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d=\"M528 320C528 205.1 434.9 112 320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z\"/></svg>";
        } else {
            return;
        }

        winnerContainer.append(winnerDisplay);

        this.#game.append(winnerContainer);
    }
}