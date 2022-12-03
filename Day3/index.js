const {
  map,
  split,
  pipe,
  sum,
  splitAt,
  uniq,
  flatten,
  identity,
  groupBy,
  toPairs,
  tail,
  find,
  head,
  addIndex,
  fromPairs,
  splitEvery,
  tap,
  findIndex,
  intersection,
} = require("ramda")
const fs = require("fs")
const scoreMap = pipe(
  split(""),
  addIndex(map)((letter, index) => [letter, index + 1]),
  fromPairs
)("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")

const getAnswerPartOne = input => {
  const data = fs.readFileSync(input).toString().split("\n")

  const processLine = line =>
    pipe(
      split(""),
      splitAt(line.length / 2),
      arr => intersection(arr[0], arr[1]),
      head,
      a => scoreMap[a]
    )(line)

  return pipe(map(processLine), sum)(data)
}

const getAnswerPartTwo = input => {
  const data = fs.readFileSync(input).toString().split("\n")

  const processLine = line => pipe(split(""), uniq)(line)

  const processTeam = team =>
    pipe(
      map(processLine),
      flatten,
      groupBy(identity),
      toPairs,
      find(([, arr]) => arr.length == 3),
      head,
      a => scoreMap[a]
    )(team)

  return pipe(splitEvery(3), map(processTeam), sum)(data)
}

console.log(getAnswerPartOne("input.txt"))
