import { fileToLines, fileToNumbers } from './index'

const numberFileInput = `12312
31412
12312
531
745435`

const stringArray = ['12312', '31412', '12312', '531', '745435']

const numberArray = [12312, 31412, 12312, 531, 745435]

describe('utility functions', () => {
  describe('functions for parsing input', () => {
    test('should split input to string lines with no mapFn', () => {
      expect(fileToLines(numberFileInput)).toEqual(stringArray)
    })

    test('should split input to number array using fileToLines', () => {
      expect(fileToNumbers(numberFileInput)).toEqual(numberArray)
    })
  })
})
