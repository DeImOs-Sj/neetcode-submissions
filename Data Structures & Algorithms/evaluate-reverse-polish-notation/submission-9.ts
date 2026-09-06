class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        console.log(tokens.length)
        let i = 0
        let stack: number[] = []
        while (i < tokens.length ) {
            if (tokens[i] === "+") {
                let a = stack.pop()
                let b = stack.pop()
                stack.push(a + b)

            } else if (tokens[i] === "-") {
                let a = stack.pop()
                let b = stack.pop()
                stack.push(b - a)

            } else if (tokens[i] === "*") {
                let a = stack.pop()
                let b = stack.pop()
                stack.push(a * b)

            } else if (tokens[i] === "/") {
                let a = stack.pop()
                let b = stack.pop()
                stack.push(Math.trunc(b/a))

            }
            else {
                stack.push(parseInt(tokens[i]))
            }
            i++
        }
        return stack[0]
    }
}


