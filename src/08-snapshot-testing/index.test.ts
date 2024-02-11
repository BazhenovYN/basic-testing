import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  // Check match by expect(...).toStrictEqual(...)
  test('should generate linked list from values 1', () => {
    const expected = {
      value: 'a',
      next: {
        value: 'b',
        next: {
          value: 'c',
          next: { value: null, next: null },
        },
      },
    };
    const list = generateLinkedList(['a', 'b', 'c']);
    expect(list).toStrictEqual(expected);
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    const list = generateLinkedList(['a', 'b', 'c']);
    expect(list).toMatchSnapshot();
  });
});
