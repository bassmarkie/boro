const { expect } = require('chai')

const maxScore = require('./maxScore')
const arrays = {
  1: [1, 1, 4, 1, 1],
  2: [1, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1],
  3: [-1, 3, 2, 3, 4, 3],
  4: [-1, -2, -3],
  5: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  6: [5, 10, 5, 10, 100, 10, 5, 10, 5, 10, 5, 10]
}

describe('Max Score of Array', () => {
  it('example 1', () => {
    expect(maxScore(arrays[1])).to.equal(5)
  })
  it('example 2', () => {
    expect(maxScore(arrays[2])).to.equal(11)
  })
  it('example 3', () => {
    expect(maxScore(arrays[3])).to.equal(9)
  })
  it('example 4', () => {
    expect(maxScore(arrays[4])).to.equal(0)
  })
  it('example 5', () => {
    expect(maxScore(arrays[5])).to.equal(30)
  })
  it('example 6', () => {
    expect(maxScore(arrays[6])).to.equal(120)
  })
})
