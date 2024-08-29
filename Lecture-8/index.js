let str = "the quick Brown fox jumps over The lazy dog."
let words = str.split(" ")
// for (let i = 0; i < words.length; i++) {
//     words[0] = words[0].toUpperCase()
//     if (words[i] == " ") {
//         words[i + 1] = words[i + 1].toUpperCase()

//     }
// }

// console.log(words.join(""));



const convertUpperCase = (str) => {
    let words = str.split("")
    words[0] = words[0].toUpperCase()
    return words.join("")
}
const capitalized = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        // arr[i] = convertUpperCase(arr[i]);
        arr[i] = arr[i].replace(arr[i][0], arr[i][0].toUpperCase());
    }
    console.log(arr.join(" "));

}

// capitalized(words)


let str2 = "cbbd"
let arr2 = str2.split("")
console.log(arr2);
