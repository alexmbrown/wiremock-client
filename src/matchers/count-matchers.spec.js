const Matchers = require('./count-matchers')

describe('Count Matchers', () => {

  it('lessThan()', () => {
    let comparator = Matchers.lessThan(10)
    expect(comparator(Number.MIN_VALUE)).toBeTruthy()
    expect(comparator(-1)).toBeTruthy()
    expect(comparator(9)).toBeTruthy()
    expect(comparator(10)).toBeFalsy()
    expect(comparator(11)).toBeFalsy()
    expect(comparator(Number.MAX_VALUE)).toBeFalsy()
    expect(comparator()).toBeFalsy()
    expect(comparator(null)).toBeFalsy()
  })

  it('lessThanOrExactly()', () => {
    let comparator = Matchers.lessThanOrExactly(10)
    expect(comparator(Number.MIN_VALUE)).toBeTruthy()
    expect(comparator(-1)).toBeTruthy()
    expect(comparator(9)).toBeTruthy()
    expect(comparator(10)).toBeTruthy()
    expect(comparator(11)).toBeFalsy()
    expect(comparator(Number.MAX_VALUE)).toBeFalsy()
    expect(comparator()).toBeFalsy()
    expect(comparator(null)).toBeFalsy()
  })

  it('exactly()', () => {
    let comparator = Matchers.exactly(10)
    expect(comparator(Number.MIN_VALUE)).toBeFalsy()
    expect(comparator(-1)).toBeFalsy()
    expect(comparator(9)).toBeFalsy()
    expect(comparator(10)).toBeTruthy()
    expect(comparator(11)).toBeFalsy()
    expect(comparator(Number.MAX_VALUE)).toBeFalsy()
    expect(comparator()).toBeFalsy()
    expect(comparator(null)).toBeFalsy()
  })

  it('moreThanOrExactly()', () => {
    let comparator = Matchers.moreThanOrExactly(10)
    expect(comparator(Number.MIN_VALUE)).toBeFalsy()
    expect(comparator(-1)).toBeFalsy()
    expect(comparator(9)).toBeFalsy()
    expect(comparator(10)).toBeTruthy()
    expect(comparator(11)).toBeTruthy()
    expect(comparator(Number.MAX_VALUE)).toBeTruthy()
    expect(comparator()).toBeFalsy()
    expect(comparator(null)).toBeFalsy()
  })

  it('moreThan()', () => {
    let comparator = Matchers.moreThan(10)
    expect(comparator(Number.MIN_VALUE)).toBeFalsy()
    expect(comparator(-1)).toBeFalsy()
    expect(comparator(9)).toBeFalsy()
    expect(comparator(10)).toBeFalsy()
    expect(comparator(11)).toBeTruthy()
    expect(comparator(Number.MAX_VALUE)).toBeTruthy()
    expect(comparator()).toBeFalsy()
    expect(comparator(null)).toBeFalsy()
  })

})
