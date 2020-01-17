//1.Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.

function replace(arr, char) {
    let index = arr.indexOf(char)
    return index;
}
function hackerSpeak(str) {
    let arr = str.split('')
    index = 0;
    for (let char of arr) {
        switch (char) {
            case 'a':
            arr[replace(arr,char)] = '4';
            break
            case 's':
                arr[replace(arr,char)] = '5';
                break
            case 'o':
                arr[replace(arr,char)] = '0';
                break
            case 'e':
                arr[replace(arr,char)] = '3';
                break
            case 'i':
                arr[replace(arr,char)] = '1';
                break
        }
    }
    return arr.join('')
}

console.log(hackerSpeak("javascript is cool")); // "j4v45cr1pt 15 c00l"
console.log(hackerSpeak("programming is fun")); //"pr0gr4mm1ng 15 fun"
console.log(hackerSpeak("become a coder"));  //"b3c0m3 4 c0d3r"


//2.ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. Your task is to create a function that takes a string and returns true if the PIN is valid and false if it's not.

function validatePIN(pin) {
    if (pin.length === 4 || pin.length === 6) {
        var numbers = '0123456789'
        return pin.split('').every(function (value) {
            return numbers.indexOf(value) > -1;
        });
    }
    return false;
}

console.log(validatePIN("1234"));  //true
console.log(validatePIN("12345"));  //false
console.log(validatePIN("a234"));  //false
console.log(validatePIN(""));  //false

//3.Return the smallest number of steps it takes to convert a string entirely into uppercase or entirely into lower case, whichever takes the fewest number of steps. A step consists of changing one character from lower to upper case, or vice versa.

function stepsToConvert(str) {
    const upperCase = str.split('').filter(letter => letter == letter.toUpperCase()).length;
    const lowerCase = str.split('').filter(letter => letter == letter.toLowerCase()).length;

    return Math.min(...[upperCase,lowerCase])
}

console.log(stepsToConvert("abC"))  //1 // "abC" converted to "abc" in 1 step
console.log(stepsToConvert("abCBA") ) //2 // "abCBA" converted to "ABCBA" in 2 steps
console.log(stepsToConvert("aba"))  //0
console.log(stepsToConvert("abaCCC"))  //3