import { fileToNumbers } from '../utils'

function parseInput(input: string): number[] {
  return fileToNumbers(input)
}

function implementation(input: number[]): number {
  return input.reduce((acc, curr) => acc + curr, 0)
}

function puzzle1(input: string): number {
  const parsedInput = parseInput(input)
  const result = implementation(parsedInput)
  console.log('🎄 Day 1, Puzzle 1: ', result)
  return result
}

export { puzzle1 }
