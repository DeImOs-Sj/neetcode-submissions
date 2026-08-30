class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        let stack: number[] = [];

        for (let i: number = 0; i < operations.length; i++) {
            if (operations[i] == "+") {
                stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
            } else if (operations[i] == "C") {
                stack.pop();
            } else if (operations[i] == "D") {
                stack.push(stack[stack.length - 1] * 2);
            } else {
                stack.push(Number(operations[i]));
            }
        }
        return stack.reduce((sum, num) => sum + num, 0);
    }
}
