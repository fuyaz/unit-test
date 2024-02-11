import MergeFunction  from './main';

describe('Merge Function', () => {
    test('merge 3 collection and sort', () => {
      const collection1 = [1, 4, 6, 8];
      const collection2 = [2, 5, 7, 7];
      const collection3 = [9, 5, 3, 1];
      const result = MergeFunction.merge(collection1, collection2, collection3);
      expect(result).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 7, 7, 8,9]);
    });
  });
