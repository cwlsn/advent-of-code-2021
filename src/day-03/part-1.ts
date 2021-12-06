import { fileToLines } from '../utils'

function parseInput(input: string): string[] {
  return fileToLines(input)
}

function implementation(input: string[]): number {
  const map = {}
  for (const binString of input) {
    const bits = binString.split('')
    for (let i = 0; i < bits.length; i += 1) {
      if (!map[i]) {
        map[i] = {
          numZeroes: 0,
          numOnes: 0,
        }
      }
      if (bits[i] === '0') {
        map[i].numZeroes += 1
      } else {
        map[i].numOnes += 1
      }
    }
  }

  let gamma = ''
  let epsilon = ''
  Object.keys(map).forEach(place => {
    if (map[place].numZeroes > map[place].numOnes) {
      gamma += '0'
      epsilon += '1'
    } else {
      gamma += '1'
      epsilon += '0'
    }
  })

  return parseInt(gamma, 2) * parseInt(epsilon, 2)
}

function part1(input: string): number {
  const parsedInput = parseInput(input)
  const result = implementation(parsedInput)
  return result
}

export { part1 }
