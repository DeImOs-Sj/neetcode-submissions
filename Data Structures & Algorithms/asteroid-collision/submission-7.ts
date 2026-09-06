class Solution {

    asteroidCollision(asteroids: number[]): number[] {
        let stack = []
        let i = 0
        while (i < asteroids.length) {
            while (stack.length != 0 && stack[stack.length - 1] > 0 && asteroids[i] < 0) {
                if (Math.abs(asteroids[i]) > Math.abs(stack[stack.length - 1])) {
                    stack.pop()
                    continue
                }
                else if (Math.abs(stack[stack.length - 1]) === Math.abs(asteroids[i])) {
                    stack.pop()
                    i++
                    continue
                }
                else {
                    i++
                    continue
                }
            }
            if (i < asteroids.length) {
                stack.push(asteroids[i])
            } i++


        }
        return stack


    }

}
