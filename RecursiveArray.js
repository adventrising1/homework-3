// tesk 1
function recurseArray(arr, index) {
    if (index < arr.length - 1) {
        arr[index] = arr[index + 1];
        recurseArray(arr, index + 1);
    } else {
        arr.pop();
    }


}

let arr1 = [1];
recurseArray(arr1, 0);
console.log(arr1);