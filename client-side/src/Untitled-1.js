

function reverseWord(string){
    return string.split("").reverse().join("").split(" ").reverse().join(" ");
}
console.log(reverseWord("string is a string"))