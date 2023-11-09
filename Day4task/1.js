//Print Odd Numbers in an Array (Anonymous Function)
const printOddNumbers = (arr) => {
    arr.forEach((num) => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};



//Convert All the Strings to Title Caps in a String Array (Anonymous Function)

const convertToTitleCaps = (strArray) => {
    return strArray.map((str) => {
        return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    });
};

//Return All the Prime Numbers in an Array (Anonymous Function):

//const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;


const getPrimeNumbers = (arr) => {
    return arr.filter((num) => isPrime(num));
};

//Return All the Palindromes in an Array (Anonymous Function):

const isPalindrome = (str) => {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return str === str.split("").reverse().join("");
};

const getPalindromes = (arr) => {
    return arr.filter((str) => isPalindrome(str));
};

//Return Median of Two Sorted Arrays of the Same Size (Anonymous Function):

const findMedian = (arr1, arr2) => {
    const merged = [...arr1, ...arr2].sort((a, b) => a - b);
    const mid = Math.floor(merged.length / 2);
    if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
};





