const {map, split, pipe, sum} = require("ramda")
const fs = require("fs")

const getAnswerPartOne = input => {
  const data = fs.readFileSync(input).toString().split("\n")

  return data
}

const getAnswerPartTwo = input => {
  const data = fs.readFileSync(input).toString().split("\n")

  return data
}

console.log(getAnswerPartOne("input.txt"))
