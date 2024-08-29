let arr = [8, 7, 6, 1, 4, 5, 6, 8, 7, 4, 1];

let temp = [...arr].sort();
// console.log(temp);

const findduplicate = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            return arr[i];
        }
    }
    return -1
};

let val = findduplicate(temp);

// let index = arr.findIndex(ele => ele == val);

const findIndex = (val, arr) => {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i
        }
    }

    return -1
}



console.log(findIndex(val, arr));
