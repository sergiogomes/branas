import { sum } from "../src/math";

describe('math', () => {
  it('should sum 2 + 2', () => {
    const result = sum(2, 2)
    expect(result).toBe(4)
  })
})
