class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */

    // multisource bfs insert multiple rotting oranges at once and then find their neighbours simultaneously marking them rotten

    private isValid(grid, m, n) {
        let row = grid.length;
        let column = grid[0].length;
        return m < row && n < column && m >= 0 && n >= 0 && grid[m][n] == 1;
    }

    orangesRotting(grid: number[][]): number {
        let row = grid.length;
        let column = grid[0].length;
        let maxTime = 0;
        let queue = [];
        let directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ];
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < column; j++) {
                if (grid[i][j] == 2) {
                    queue.push({ i, j, time: 0 });
                }
            }
        }

        while (queue.length != 0) {
            let temp = queue[0];

            let rows = temp.i;
            let columns = temp.j;
            let time = temp.time;
            maxTime = Math.max(maxTime, time);

            queue.shift();

            for (let dir of directions) {
                let new_i = dir[0] + rows;
                let new_j = dir[1] + columns;
                if (this.isValid(grid, new_i, new_j)) {
                    grid[new_i][new_j] = 2;
                    queue.push({ i: new_i, j: new_j, time: time + 1 });
                }
            }
        }

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < column; j++) {
                if (grid[i][j] == 1) {
                    return -1
                }
            }
        }

        return maxTime;
    }
}
