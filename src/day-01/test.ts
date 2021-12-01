import { input } from './input'
import { part1 } from './part-1'
import { part2 } from './part-2'

describe('day 1 parts', () => {
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

  describe('part #1', () => {
    test('matches given input', () => {
      expect(part1(givenInput)).toEqual(7)
    })

    test('real input', () => {
      expect(part1(input)).toEqual(1475)
    })
  })

  describe('part #2', () => {
    test('matches given input', () => {
      expect(part2(givenInput)).toEqual(5)
    })

    test('real input', () => {
      expect(part2(input)).toEqual(1516)
    })
  })
})
