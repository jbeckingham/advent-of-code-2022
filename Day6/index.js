const {pipe, slice, addIndex, add, findIndex} = require("ramda")
const fs = require("fs")

const getAnswerPartOne = input => {
  const data = fs.readFileSync(input).toString().split("")
  const DISTINCT_CHARS = 4
  const findIndexed = addIndex(findIndex)

  return pipe(
    findIndexed(
      (n, i) =>
        new Set(slice(i, i + DISTINCT_CHARS, [...data])).size === DISTINCT_CHARS
    ),
    add(DISTINCT_CHARS)
  )(data)
}

const getAnswerPartTwo = input => {
  // See part 1 - set DISTINCT_CHARS = 14
}

console.log(getAnswerPartOne("input.txt"))
