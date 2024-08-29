
let arr = [1, -1, 5, -2, 3]
let K = 3

const findSum = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

let Maxlength = 0
for (let i = 0; i < arr.length; i++) {
    let subArray = []
    for (let j = i; j < arr.length; j++) {
        subArray.push(arr[j])

        let sum = findSum(subArray)
        if (sum == K) {
            let curLength = subArray.length
            Maxlength = Math.max(curLength, Maxlength)
        }
    }

}


const generateSubstring = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let subArray = []
        for (let j = i; j < arr.length; j++) {
            subArray.push(arr[j])
            console.log(subArray);

        }

    }

}


let s = "rajat"
generateSubstring(s.split(""))


