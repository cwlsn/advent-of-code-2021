const NEW_LINE = /\r?\n/

function fileToLines(input: string): string[] {
  return input.split(NEW_LINE).map(line => line.trim())
}

function fileToNumbers(input: string): number[] {
  return fileToLines(input).map(item => parseInt(item))
}

export { fileToLines, fileToNumbers }
