import input from './input'
import { part1 } from './part-1'
// import { part2 } from './part-2'

describe('day 3 parts', () => {
  const givenInput = `00100
  11110
  10110
  10111
  10101
  01111
  00111
  11100
  10000
  11001
  00010
  01010`

  describe('part #1', () => {
    test('matches given input', () => {
      expect(part1(givenInput)).toEqual(198)
    })

    test('real input', () => {
      expect(part1(input)).toEqual(1071734)
    })
  })

  //   describe('part #2', () => {
  //     test('matches given input', () => {
  //       expect(part2(givenInput)).toEqual(900)
  //     })

  //     test('real input', () => {
  //       expect(part2(input)).toEqual(1813062561)
  //     })
  //   })
})
