const {map, split, pipe, sum} = require("ramda")
const fs = require("fs")

const moveScoreMap = {
  X: 1,
  Y: 2,
  Z: 3,
}

const resultScoreMap = {
  X: 0,
  Y: 3,
  Z: 6,
}

// A = rock, B = paper, C = scissors
// X = rock, Y = paper, Z = scissors
const resultMap = {
  X: {A: 3, B: 0, C: 6},
  Y: {A: 6, B: 3, C: 0},
  Z: {A: 0, B: 6, C: 3},
}

const moveToPlayMap = {
  A: {X: "Z", Y: "X", Z: "Y"},
  B: {X: "X", Y: "Y", Z: "Z"},
  C: {X: "Y", Y: "Z", Z: "X"},
}

const getScorePart1 = ([opponentMove, yourMove]) =>
  moveScoreMap[yourMove] + resultMap[yourMove][opponentMove]

const getScorePart2 = ([opponentMove, outcome]) => {
  const moveToPlay = moveToPlayMap[opponentMove][outcome]
  return moveScoreMap[moveToPlay] + resultScoreMap[outcome]
}

const getAnswerPartOne = input => {
  const data = fs.readFileSync(input).toString()

  return pipe(split("\n"), map(split(" ")), map(getScorePart1), sum)(data)
}

const getAnswerPartTwo = input => {
  const data = fs.readFileSync(input).toString()

  return pipe(split("\n"), map(split(" ")), map(getScorePart2), sum)(data)
}

console.log(getAnswerPartTwo("input.txt"))
