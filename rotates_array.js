//tesk 3
function rotate(arr, index) {
    // if (index > arr.length && index % arr.length != 0) {
    //     index = index % arr.length;
    // }
    if (index % arr.length != 0) {
        arr.unshift(arr[arr.length - 1]);
        arr.pop();
        rotate(arr, index + 1);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];// [45678123]

rotate(arr, 15);
console.log(arr);