class Solution {
    /**
     * @param {string[]} logs
     * @return {number}
     */
    minOperations(logs: string[]): number {
        let stack: string[] = [];
        for (let i = 0; i < logs.length; i++) {
            if (logs[i] == "../") {
                stack.pop();
            } else if (logs[i] == "./") {
                continue;
            } else {
                stack.push(logs[i]);
            }
        }
     
        return stack.length;
    }
}
