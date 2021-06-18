// map<T, V>(callback: (element: T) => V, collection: T[]): V[]
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
