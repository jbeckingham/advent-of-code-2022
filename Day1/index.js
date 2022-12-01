const {map, splitWhenever, split, equals, pipe, sum, descend, sort, identity, head, slice} = require("ramda")
const fs = require("fs");

const getAnswerPartOne = (input) => {
    const input = fs
        .readFileSync(input)
        .toString()

    return pipe(split("\n"), splitWhenever(equals("")), map(sum), sort(descend(identity)), head)(input)

};

const getAnswerPartTwo = (input) => {
    const input = fs
        .readFileSync(input)
        .toString()

    return pipe(split("\n"), splitWhenever(equals("")), map(sum), sort(descend(identity)), slice(0,3), sum)(input)

};

console.log(getAnswerPartTwo("input.txt"));