
// For each method
function forEach(array, callback) {
    const { length } = array;
   
    for (let index = 0; index < length; index += 1) {
      const value = array[index];
      callback(value, index, array);
    }
}

// map 

function map(array, callback) {
    const result = [];
    const { length } = array;
   
    for (let index = 0; index < length; index += 1) {
      const value = array[index];
   
      result[index] = callback(value, index, array);
    }
   
    return result;
}

// Filter 
function filter(array, callback) {
    const result = [];
   
    const { length } = array;
   
    for (let index = 0; index < length; index += 1) {
      const value = array[index];
   
      if (callback(value, index, array)) {
        push(result, value);
      }
    }
   
    return result;
}


// reducer 
function reduce(array, callback, initValue) {
    const { length } = array;
   
    let acc = initValue;
    let startAtIndex = 0;
   
    if (initValue === undefined) {
      acc = array[0];
      startAtIndex = 1;
    }
   
    for (let index = startAtIndex; index < length; index += 1) {
      const value = array[index];
      acc = callback(acc, value, index, array);
    }
   
    return acc;
}


// findIndex method.
function findIndex(array, callback) {
    const { length } = array;
   
    for (let index = 0; index < length; index += 1) {
      const value = array[index];
   
      if (callback(value, index, array)) {
        return index;
      }
    }
   
    return -1;
}


// indexOf
function indexOf(array, searchedValue) {
    return findIndex(array, value => value === searchedValue);
}

// some method

function some(array, callback) {
    const { length } = array;
   
    for (let index = 0; index < length; index += 1) {
      const value = array[index];
   
      if (callback(value, index, array)) {
        return true;
      }
    }
   
    return false;
}

// includes is just some with callback

function includes(array, searchedValue) {
    return some(array, value => value === searchedValue);
}

// flatt me

function flat(array, depth = 0) {
    if (depth < 1 || !Array.isArray(array)) {
      return array;
    }
   
    return reduce(
      array,
      (result, current) => {
        return concat(result, flat(current, depth - 1));
      },
      [],
    );
}

// concat
export function concat(array, ...values) {
  const result = [...array];
  const { length } = values;

  for (let index = 0; index < length; index += 1) {
    const value = values[index];

    if (Array.isArray(value)) {
      push(result, ...value);
    } else {
      push(result, value);
    }
  }

  return result;
}

// slice method 
function slice(array, startIndex = 0, endIndex = array.length) {
    const result = [];
   
    for (let index = startIndex; index < endIndex; index += 1) {
      const value = array[index];
   
      if (index < array.length) {
        push(result, value);
      }
    }
   
    return result;
}

function pop(array) {
    const value = array[array.length - 1];
   
    array.length = array.length - 1;
   
    return value;
}

function push(array, ...values) {
    const { length: arrayLength } = array;
    const { length: valuesLength } = values;
   
    for (let index = 0; index < valuesLength; index += 1) {
      array[arrayLength + index] = values[index];
    }
   
    return array.length;
   }