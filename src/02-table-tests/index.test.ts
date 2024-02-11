import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 2, b: 0, action: Action.Add, expected: 2 },
  { a: 0, b: 2, action: Action.Add, expected: 2 },
  { a: -2, b: 3, action: Action.Add, expected: 1 },
  { a: 3, b: -2, action: Action.Add, expected: 1 },
  { a: 1, b: 2, action: Action.Subtract, expected: -1 },
  { a: 2, b: 2, action: Action.Subtract, expected: 0 },
  { a: 3, b: 2, action: Action.Subtract, expected: 1 },
  { a: 2, b: 0, action: Action.Subtract, expected: 2 },
  { a: 0, b: 2, action: Action.Subtract, expected: -2 },
  { a: -2, b: 3, action: Action.Subtract, expected: -5 },
  { a: 3, b: -2, action: Action.Subtract, expected: 5 },
  { a: 1, b: 2, action: Action.Multiply, expected: 2 },
  { a: 2, b: 2, action: Action.Multiply, expected: 4 },
  { a: 3, b: 2, action: Action.Multiply, expected: 6 },
  { a: 2, b: 0, action: Action.Multiply, expected: 0 },
  { a: 0, b: 2, action: Action.Multiply, expected: 0 },
  { a: -2, b: 3, action: Action.Multiply, expected: -6 },
  { a: 3, b: -2, action: Action.Multiply, expected: -6 },
  { a: 1, b: 2, action: Action.Divide, expected: 0.5 },
  { a: 2, b: 2, action: Action.Divide, expected: 1 },
  { a: 4, b: 2, action: Action.Divide, expected: 2 },
  { a: 0, b: 2, action: Action.Divide, expected: 0 },
  { a: -4, b: 2, action: Action.Divide, expected: -2 },
  { a: 6, b: -2, action: Action.Divide, expected: -3 },
  { a: 1, b: 2, action: Action.Exponentiate, expected: 1 },
  { a: 2, b: 2, action: Action.Exponentiate, expected: 4 },
  { a: 2, b: 0, action: Action.Exponentiate, expected: 1 },
  { a: 0, b: 2, action: Action.Exponentiate, expected: 0 },
  { a: -2, b: 3, action: Action.Exponentiate, expected: -8 },
  { a: -2, b: 4, action: Action.Exponentiate, expected: 16 },
  { a: 2, b: -2, action: Action.Exponentiate, expected: 0.25 },
  { a: '2', b: 2, action: Action.Add, expected: null },
  { a: 2, b: '2', action: Action.Add, expected: null },
  { a: '2', b: '2', action: Action.Add, expected: null },
  { a: 2, b: 2, action: 'add', expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    `return correct results`,
    ({ a, b, action, expected }) => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBe(expected);
    },
  );
});
