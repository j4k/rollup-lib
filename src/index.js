const fibonacci = (start = 1, times = 10) => {
  let previous
  let sum

  return [...Array(times - 1).keys()]
    .map(
      (actual) => {
        const step = (sum || start) + (previous || start)
        previous = sum
        sum = step
        return step
      }
    )
    .reverse()
    .concat(start)
    .reverse()
}

export default fibonacci
