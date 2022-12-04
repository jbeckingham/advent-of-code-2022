const {
  map,
  split,
  pipe,
  sum,
  range,
  intersection,
  filter,
  equals,
  tap,
  length,
} = require("ramda")
const fs = require("fs")

const getAnswerPartOne = input => {
  const data = fs.readFileSync(input).toString().split("\n")

  const doesContain = ([a, b]) => {
    const crossover = intersection(a, b)
    return equals(crossover, a) || equals(crossover, b)
  }

  const processLine = line =>
    pipe(
      split(","),
      map(split("-")),
      map(map(parseInt)),
      map(([a, b]) => range(a, b + 1))
    )(line)

  return pipe(map(processLine), filter(doesContain), length)(data)
}

const getAnswerPartTwo = input => {
  const data = fs.readFileSync(input).toString().split("\n")

  const processLine = line =>
    pipe(
      split(","),
      map(split("-")),
      map(map(parseInt)),
      map(([a, b]) => range(a, b + 1))
    )(line)

  return pipe(
    map(processLine),
    filter(arr => intersection(...arr).length > 0),
    length
  )(data)
}

console.log(getAnswerPartTwo("input.txt"))
