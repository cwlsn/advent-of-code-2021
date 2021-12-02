import input from './input'
import { part1 } from './part-1'
import { part2 } from './part-2'

describe('day 2 parts', () => {
  const givenInput = `forward 5
  down 5
  forward 8
  up 3
  down 8
  forward 2`

  describe('part #1', () => {
    test('matches given input', () => {
      expect(part1(givenInput)).toEqual(150)
    })

    test('real input', () => {
      expect(part1(input)).toEqual(1947824)
    })
  })

  describe('part #2', () => {
    test('matches given input', () => {
      expect(part2(givenInput)).toEqual(900)
    })

    test('real input', () => {
      expect(part2(input)).toEqual(1813062561)
    })
  })
})
