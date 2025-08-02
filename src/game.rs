use std::u8;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
#[derive(Debug, Clone)]
pub struct Game {
    cells: [[u8; 3]; 3],
    player: bool
}

#[wasm_bindgen]
impl Game {
    #[wasm_bindgen(constructor)]
    pub fn new(player: bool) -> Self {
        let mut game = Game { cells: [[0; 3]; 3], player: player };
        if player {
            game.compute_next_move();
        }

        game
    }

    pub fn play(&mut self, x: usize, y: usize) {
        self.cells[x][y] = if self.player {1} else {2};
        self.compute_next_move();
    }

    fn compute_next_move(&mut self) {
        for col in 0..3 {
            for line in 0..3 {
                if self.cells[col][line] == 0 {
                    self.cells[col][line] = if self.player {2} else {1};
                }
            }
        }    
    }

    pub fn to_array(&self) -> Vec<u8> {
        self.cells.iter().flatten().copied().collect()
    }
}
