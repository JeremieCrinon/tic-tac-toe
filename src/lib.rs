use std::vec;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn compute_next_move(mut grid: Vec<u8>, player: bool) -> Vec<u8> {
    let mut best_move_x = 0;
    let mut best_move_y = 0;
    let mut best_move_weight = 0;

    let mut first_move_passed = false;

    for line in 0..3 {
        for col in 0..3 {
            if grid[(line * 3) + col ] == 0 {
                let mut new_grid = grid.clone();

                new_grid[(line * 3) + col] = if player {2} else {1};
                print!{"{:?}", new_grid};

                let pos_weight = evaluate_position(&new_grid, player, !player);

                if pos_weight > best_move_weight || (!first_move_passed) {
                    first_move_passed = true;

                    best_move_x = col;
                    best_move_y = line;
                    best_move_weight = pos_weight;
                }
            }
        }
    }

    grid[(best_move_y * 3) + best_move_x] = if player {2} else {1};

    // print!{"{}", check_win(&grid)};

    grid    
}

fn evaluate_position(grid: &Vec<u8>, player: bool, player_to_move: bool) -> i64 {
    // print!{"{:?}", grid};
    let win: u8 = check_win(&grid);

    if win == 1 {
        return if player {-1} else {1};
    } else if win == 2 {
        return if player {1} else {-1};
    } else if win == 3 {
        return 0;
    }

    let mut best_score = if player_to_move == player { i64::MIN } else { i64::MAX };

    for line in 0..3 {
        for col in 0..3 {
            if grid[(line * 3) + col] == 0 {
                let mut new_grid = grid.clone();
                new_grid[(line * 3) + col] = if player_to_move {2} else {1};

                let score = evaluate_position(&new_grid, player, !player_to_move);

                if player_to_move == player {
                    best_score = best_score.max(score);
                } else {
                    best_score = best_score.min(score);
                }
            }
        }
    }

    best_score
}

fn check_win(grid: &Vec<u8>) -> u8 {
    let diag1: Vec<u8> = vec![grid[0], grid[4], grid[8]];
    let diag2: Vec<u8> = vec![grid[6], grid[4], grid[2]];

    for a in 0..3 {
        let mut line: Vec<u8> = vec![];
        let mut col: Vec<u8> = vec![];

        for b in 0..3 {
            line.push(grid[(a * 3) + b ]);
            col.push(grid[(b * 3) + a]);
        }

        if check_array_full_duplicates(&line) {
            return line[0];
        }

        if check_array_full_duplicates(&col) {
            return col[0];
        }
    }

    if check_array_full_duplicates(&diag1) {
        return diag1[0];
    }

    if check_array_full_duplicates(&diag2) {
        return diag2[0];
    }

    if !grid.contains(&0) {
        return 3;
    }

    0
}

fn check_array_full_duplicates(array: &Vec<u8>) -> bool {
    for x in array {
        if x != &array[0] {
            return false;
        }
    }

    true
}

