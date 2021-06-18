// filter<T>(predicate: (element: T) => boolean, collection: T[]): T[]
/** 
 * @template T
 * */
/** 
 *The function returns a new array without an element that did not pass validation in the callback. Callback сhecks the element if it meets the conditions and returns a boolean value
 * @callback callbackFilter 
 * @param {T} element - item
 * @returns {boolean} - Сhecked item status
 */
 /**
 * @param {callbackFilter}callback  - A callback to run.
 * @param {T[]} array  - Inital array
 * @returns {T[]} - New array without an item that did not pass validation in the callback
 */
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