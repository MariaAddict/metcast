// filter<T>(predicate: (element: T) => boolean, collection: T[]): T[]
const filter = (callback, array) => {
    return array.reduce((acc, currentVal) => {
        let isFiltered = callback(currentVal);
        if (isFiltered) {
            acc = [...acc, currentVal];
        }
        return acc;
    }, []);
}

//example
const arr = [0, 1, 2, 3, 4];

const res = filter(checkForEvenNumber, arr);

console.log(res); // [0, 2, 4]

function checkForEvenNumber(item) {
  return item % 2 === 0;
}