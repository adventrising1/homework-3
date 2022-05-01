// tesk 2 
function flatten(arr) {
    let flat = [];

    function helper(arr) {
        for (let i = 0; i < arr.length; i++) {
            let element = arr[i];
            if (Array.isArray(element)) {
                helper(element);
            } else {
                flat.push(element);
            }

        }
    }
    helper(arr);
    return flat;
}

let arr1 = [12, 32, 34, [23, 43, 233, 21], [[1, [3, 4, [1, 2]], 10]]];
let arr2 = flatten(arr1);
console.log(arr2);