//Print Odd Numbers in an Array (Arrow Function):
const printOddNumbers = (arr) => arr.forEach((num) => { if (num % 2 !== 0) console.log(num); });

//Convert All the Strings to Title Caps in a String Array (Arrow Function):
const convertToTitleCaps = (strArray) => strArray.map((str) => str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()));

//Sum of All Numbers in an Array (Arrow Function):
const sumArray = (arr) => arr.reduce((sum, num) => sum + num, 0);

//Return All the Prime Numbers in an Array (Arrow Function):
const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
};

const getPrimeNumbers = (arr) => arr.filter((num) => isPrime(num));

// example:
const numbers = [2, 3, 5, 7, 9, 11, 12];
const primeNumbers = getPrimeNumbers(numbers);
console.log(primeNumbers);

//Return All the Palindromes in an Array (Arrow Function):
const isPalindrome = (str) => {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return str === str.split("").reverse().join("");
};

const getPalindromes = (arr) => arr.filter((str) => isPalindrome(str));

// example:
const strings = ["racecar", "hello", "level", "world", "deified"];
const palindromes = getPalindromes(strings);
console.log(palindromes);
