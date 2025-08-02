use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn compute_next_move(mut grid: Vec<u8>, player: bool) -> Vec<u8> {
    for line in 0..3 {
        for col in 0..3 {
            if grid[(line * 3) + col ] == 0 {
                grid[(line * 3) + col] = if player {2} else {1};
                return grid;
            }
        }
    }

    grid    
}

