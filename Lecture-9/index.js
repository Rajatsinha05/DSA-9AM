const arr = [1, 2, -5, 10, -19, 20, 1, 2, 3]
let k = 3
// sliding window

let maxSum = 0;
let currSum = 0

for (let i = 0; i < k; i++) {
    currSum += arr[i]
}
maxSum = currSum


for (let i = k; i < arr.length; i++) {
    currSum += arr[i]
    currSum -= arr[i - k]
    maxSum = Math.max(maxSum, currSum)


}

console.log(maxSum);
