const {
  map,
  split,
  pipe,
  slice,
  splitWhenever,
  equals,
  splitEvery,
  reduce,
  trim,
  length,
  addIndex,
  flatten,
  head,
  filter,
  isEmpty,
  tap,
  fromPairs,
  replace,
  reverse,
  append,
  values,
  join,
  transpose,
} = require("ramda")
const fs = require("fs")

const getAnswerPartOne = input => {
  const data = fs.readFileSync(input).toString().split("\n")

  const [stateData, movesData] = pipe(splitWhenever(equals("")))(data)

  const parseLine = pipe(
    splitEvery(4),
    map(trim),
    map(replace("[", "")),
    map(replace("]", ""))
  )

  const initialState = pipe(
    map(parseLine),
    transpose,
    map(filter(i => !isEmpty(i))),
    addIndex(map)((n, i) => [i + 1, n]),
    fromPairs
  )(stateData)

  const parsedMoves = pipe(
    map(split(/move (.+) from (.+) to (.+)/)),
    map(filter(m => !isEmpty(m)))
  )(movesData)

  const applyMove = (state, [n, origin, destination]) => ({
    ...state,
    [origin]: slice(n, length(state[origin]), state[origin]),
    [destination]: pipe(
      slice(0, n),
      // reverse,  //uncomment for part 1
      append(state[destination]),
      flatten
    )(state[origin]),
  })

  return pipe(
    reduce(applyMove, initialState),
    map(head),
    values,
    join("")
  )(parsedMoves)
}

const getAnswerPartTwo = input => {
  // See part one, uncomment line 66
}

console.log(getAnswerPartOne("input.txt"))
