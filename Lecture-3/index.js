// two pointer
const findTargetUsingTwoPointer = (arr, target) => {
    let i = 0;
    let j = arr.length - 1

    while (i < j) {
        if (arr[i] + arr[j] == target) {
            return [i, j]
        }
        else if (arr[i] + arr[j] > target) {
            j--
        }
        else {
            i++
        }
    }

    return [-1, -1]

}

// loop
const findTargetUsingLoop = (arr, target) => {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                return [i, j]
            }
        }
    }

    return [-1, -1]

}



let arr = [2, 3, 5, 8, 20, 30, 33]
let target = 28

console.log(findTargetUsingTwoPointer(arr, target));


