// let str = "testingtest"
let nums = [2, 7, 11, 15, 8], target = 10


let map = new Map();

let result = [-1, -1]

for (let i = 0; i < nums.length; i++) {

    if (map.has(target - nums[i])) {
        result[0] = map.get(target - nums[i]);
        result[1] = i
        break;
    }
    else {
        map.set(nums[i], i)
    }
}

console.log(result);


// for (let i = 0; i < str.length; i++) {
//     // test[str[i]] = test[str[i]] == null ? 1 : test[str[i]] + 1
//     if (map.has(str[i])) {
//         map.set(str[i], map.get(str[i]) + 1)
//     }
//     else {
//         map.set(str[i], 1)
//     }
// }

// console.log(map);

