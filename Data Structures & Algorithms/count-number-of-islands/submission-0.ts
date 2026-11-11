class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];
    isValid(new_i, new_j, grid, row, column) {
        return new_i >= 0 && new_j >= 0 && new_i < row && new_j < column && grid[new_i][new_j] == "1";
    }
    bfs(i, j, row, column, grid) {
        grid[i][j] = "0";
        let queue = [];
        queue.push({ r: i, c: j });
        while (queue.length != 0) {
            let temp = queue[0];
            let tempRow = temp.r;
            let tempCol = temp.c;
            queue.shift()
            for (let dir of this.directions) {
                let new_i = dir[0] + tempRow;
                let new_j = dir[1] + tempCol;
                if (this.isValid(new_i, new_j, grid, row, column)) {
                    grid[new_i][new_j]='0'
                    queue.push({r:new_i,c:new_j})
                }
            }
        }
    }
    numIslands(grid: string[][]): number {
        let row = grid.length;
        let column = grid[0].length;
        let count = 0;
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < column; j++) {
                if (grid[i][j] == '1')
                 {  
                    count++
                    this.bfs(i, j, row, column, grid);
                }
            }
        }
        return count
    }
}
