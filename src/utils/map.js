// map<T, V>(callback: (element: T) => V, collection: T[]): V[]
/** 
 * @template T,V 
 * */
/** 
 * The function returns a new array with a new element returned from callback. Callback - Item update function that takes an element T and return item update
 * @callback callbackMap
 * @param {T} element - item
 * @returns {V} - item update
 * /
 /**
 * @param {callbackMap} callback  - A callback to run.
 * @param {T[]} array  - Inital array
 * @returns {V[]} - New array with update array items
 */
const map = (callback, array) => {
    return array.reduce((acc, currentVal) => {
        let item = callback(currentVal);
        acc = [...acc, item];
        return acc;
    }, []);
}

//example
const firstArr = [0, 1, 2, 3, 4];
function addTwo(item) {
    return item = item + 2;
}

const res = map(addTwo, firstArr);

console.log(res);
