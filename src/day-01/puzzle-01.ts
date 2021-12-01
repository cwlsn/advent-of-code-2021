import { fileToNumbers } from '../utils'

function parseInput(input: string): number[] {
  return fileToNumbers(input)
}

function implementation(input: number[]): number {
  let count = 0
  let previous = input[0]
  for (let i = 1; i < input.length; i += 1) {
    if (input[i] > previous) {
      count += 1
    }
    previous = input[i]
  }
  return count
}

function puzzle1(input: string): number {
  const parsedInput = parseInput(input)
  const result = implementation(parsedInput)
  return result
}

export { puzzle1 }
