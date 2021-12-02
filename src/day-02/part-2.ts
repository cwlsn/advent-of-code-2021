import { fileToLines } from '../utils'
import type { Instruction } from './types'

function parseInput(input: string): Instruction[] {
  return fileToLines(input).map(line => {
    const [direction, valueString] = line.split(' ')
    return {
      direction,
      value: parseInt(valueString),
    }
  })
}

function implementation(input: Instruction[]): number {
  let horizontal = 0
  let depth = 0
  let aim = 0

  for (const instruction of input) {
    switch (instruction.direction) {
      case 'forward':
        depth += aim * instruction.value
        horizontal += instruction.value
        break
      case 'up':
        aim -= instruction.value
        break
      case 'down':
        aim += instruction.value
        break
    }
  }

  return horizontal * depth
}

function part2(input: string): number {
  const parsedInput = parseInput(input)
  const result = implementation(parsedInput)
  return result
}

export { part2 }
