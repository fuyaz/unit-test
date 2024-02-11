interface Merge {
    merge(collection1: number[], collection2: number[], collection3: number[]): number[];
  }
  
const MergeFunction: Merge = {
  merge: (collection1, collection2, collection3) => {
    const result: number[] = [];
    let i = 0, j = 0, k = collection3.length-1;

    while (i < collection1.length && j < collection2.length && k >= 0) {
      if (collection1[i] <= collection2[j] && collection1[i] <= collection3[k]) {
        result.push(collection1[i]);
        i++;
      } else if (collection2[j] <= collection1[i] && collection2[j] <= collection3[k]) {
        result.push(collection2[j]);
        j++;
      } else {
        result.push(collection3[k]);
        k--;
      }
    }
    while (i < collection1.length) {
      result.push(collection1[i]);
      i++;
    }
    while (j < collection2.length) {
      result.push(collection2[j]);
      j++;
    }
    while (k >= 0) {
      result.push(collection3[k]);
      k--;
    }
    return result;
  }
}

export default MergeFunction;