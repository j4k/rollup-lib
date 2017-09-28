import fibonacci from '../src'

describe('fibonacci', () => {
  it('should have the default parameters set on 1 and 10', () => {
    const actual = fibonacci(1, 10)
    const expected = fibonacci()
    expect(actual).toEqual(expected)
  })

  it('should return the fibonacci sequence', () => {
    let actual = fibonacci(1, 10)
    let expected = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
    expect(actual).toEqual(expected)

    actual = fibonacci(10, 5)
    expected = [10, 20, 30, 50, 80]
    expect(actual).toEqual(expected)
  })
})
