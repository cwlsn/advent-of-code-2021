import { input } from './input'
import { puzzle1 } from './puzzle1'
import { puzzle2 } from './puzzle2'

describe('day 1 puzzles', () => {
  const givenInput = `199
    200
    208
    210
    200
    207
    240
    269
    260
    263`
  describe('puzzle #1', () => {
    test('matches given input', () => {
      expect(puzzle1(givenInput)).toEqual(7)
    })

    test('real input', () => {
      expect(puzzle1(input)).toEqual(1475)
    })
  })

  describe('puzzle #2', () => {
    test('matches given input', () => {
      expect(puzzle2(givenInput)).toEqual(5)
    })

    test('real input', () => {
      expect(puzzle2(input)).toEqual(1516)
    })
  })
})
