import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const [a, b] = [10, 5];
    const result = simpleCalculator({ a, b, action: Action.Add });
    expect(result).toBe(a + b);
  });

  test('should subtract two numbers', () => {
    const [a, b] = [10, 5];
    const result = simpleCalculator({ a, b, action: Action.Subtract });
    expect(result).toBe(a - b);
  });

  test('should multiply two numbers', () => {
    const [a, b] = [10, 5];
    const result = simpleCalculator({ a, b, action: Action.Multiply });
    expect(result).toBe(a * b);
  });

  test('should divide two numbers', () => {
    const [a, b] = [10, 5];
    const result = simpleCalculator({ a, b, action: Action.Divide });
    expect(result).toBe(a / b);
  });

  test('should exponentiate two numbers', () => {
    const [a, b] = [10, 5];
    const result = simpleCalculator({ a, b, action: Action.Exponentiate });
    expect(result).toBe(a ** b);
  });

  test('should return null for invalid action', () => {
    const [a, b] = [10, 5];
    const result = simpleCalculator({ a, b, action: 42 });
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const [a, b] = ['10', 'five'];
    const result = simpleCalculator({ a, b, action: Action.Add });
    expect(result).toBeNull();
  });
});
