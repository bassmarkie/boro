const maxScore = inputArr => {
  let score = 0

  const removeAction = (array, sum) => {
    if (array.length < 1) {
      if (sum > score) score = sum
    } else {
      array.forEach((elem, i, initArray) =>
        removeAction(
          array.filter(
            (initArrElem, j) =>
              i !== j &&
              initArrElem !== initArray[i - 1] &&
              initArrElem !== initArray[i + 1]
          ),
          sum + elem
        )
      )
    }
  }

  removeAction(inputArr, 0)
  return score
}

module.exports = maxScore
