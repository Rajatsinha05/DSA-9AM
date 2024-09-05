let arr = [8, 6, 4, 8, 9, 1];

let arr2 = [1, 3, 4, 0,];

// [8, 6, 4, 8, 9, 1]
// [1, 6, 4, 8, 9, 8]
// [1, 4, 6, 8, 9, 8]
// [1, 4, 6, 8, 9, 8]
// [1, 4, 6, 8, 8, 9]



const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let index = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[index]) {

                index = j
            }
        }

        let temp = arr[index];
        arr[index] = arr[i];
        arr[i] = temp;


    }
    return arr;
}

// console.log(selectionSort(arr));
















// Bubble Sort
const BubbleSort = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;

            }
        }
    }
    return arr;
}


// B(o)n^2



let strings = ["talk", "app", "subject", "bouce"]

let str = "raceca"
let map = new Map();

for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
        map.set(str[i], map.get(str[i]) + 1)
    }
    else {
        map.set(str[i], 1);
    }
}
let oddCount = 0
for (let [key, val] of map) {

    if (val % 2 == 1) {
        oddCount++;
    }

}

if (oddCount > 1) {
    console.log("This String can not become Palindrome");

}
else {
    console.log("This String can become Palindrome");

}


