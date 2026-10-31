class Solution {
    /**
     * @param {number[][]} grid
     */
    grows: number;
    gcolumns: number;

    isValid(grid, new_i, new_j) {
        return (
            new_i >= 0 &&
            new_j >= 0 &&
            new_i < this.grows &&
            new_j < this.gcolumns &&
            grid[new_i][new_j] == 2147483647
        );
    }

    islandsAndTreasure(grid: number[][]): void {
        this.grows = grid.length;
        this.gcolumns = grid[0].length;
        let queue = [];
        let directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        for (let i = 0; i < this.grows; i++) {
            for (let j = 0; j < this.gcolumns; j++) {
                if (grid[i][j] == 0) {
                    queue.push({ i, j, dist: 0 });
                }
            }
        }

        while (queue.length != 0) {
            let temp = queue[0];
            let rows = temp.i;
            let columns = temp.j;
            let distance = temp.dist;
            // grid[rows][columns] = -1;

            queue.shift();

            for (let dir of directions) {
                let new_i = dir[0] + rows;
                let new_j = dir[1] + columns;
                if (this.isValid(grid, new_i, new_j)) {
                    grid[new_i][new_j] = distance + 1;
                    queue.push({ i: new_i, j: new_j, dist: distance + 1 });
                }
            }
        }
    }
}
