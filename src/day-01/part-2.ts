import { fileToNumbers } from '../utils'

function parseInput(input: string): number[] {
  return fileToNumbers(input)
}

function implementation(input: number[]): number {
  let count = 0
  // Sliding window of 3
  let previousWindowSum = input[0] + input[1] + input[2]
  for (let i = 1; i < input.length - 2; i += 1) {
    const windowSum = input[i] + input[i + 1] + input[i + 2]
    if (windowSum > previousWindowSum) {
      count += 1
    }
    previousWindowSum = windowSum
  }
  return count
}

function part2(input: string): number {
  const parsedInput = parseInput(input)
  const result = implementation(parsedInput)
  return result
}

export { part2 }
