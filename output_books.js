// tesk 4
function sort(arr) {
    let check = false;
    do {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i].percent < arr[i + 1].percent) {
                let temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
                check = true;
                break;
            }
            check = false;
        }

    } while (check)
}

let arr = [
    { book: "Catcher in the Rye&quot", readStatus: true, percent: 40 },
    { book: "Animal Farm", readStatus: true, percent: 20 },
    { book: "Solaris&quot", readStatus: false, percent: 90 },
    { book: "The Fall", readStatus: true, percent: 50 },
    { book: "White Nights", readStatus: false, percent: 60 },
    { book: "After Dark", readStatus: true, percent: 70 },
];
sort(arr);
for (let i = 0; i < arr.length; i++) {
    if (arr[i].readStatus) {
        console.log(arr[i]);
    }
}