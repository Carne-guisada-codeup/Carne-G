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

//4. Write a function that converts an object into an array, where each element represents a key-value pair.


function toArray(obj) {
    var arr = [];
    for(var i in obj){
        arr.push([i, obj[i]]);
    }
    return arr
}


console.log((toArray({ a: 1, b: 2 }), [["a", 1], ["b", 2]]));
console.log((toArray({ foo: 33, bar: 45, baz: 67 }), [["foo", 33], ["bar", 45], ["baz", 67]]));
console.log((toArray({ shrimp: 15, tots: 12 }), [["shrimp", 15], ["tots", 12]]));
console.log((toArray({}), []));

//5. Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.

function testJackpot(result) {
    for (i = 0; i < result.length; i++)
        if(result[3] == result[i]){
            return true
        } else {
            return false
        }
}


console.log(testJackpot(['@', '@', '@', '@']), true);
console.log(testJackpot(['!', '!', '!', '!']), true);
console.log(testJackpot(['abc', 'abc', 'abc', 'abc']), true);
console.log(testJackpot(['karaoke', 'karaoke', 'karaoke', 'karaoke']), true);
console.log(testJackpot(['SS', 'SS', 'SS', 'SS']), true);
console.log(testJackpot([':(', ':)', ':|', ':|']), false);
console.log(testJackpot(['&&', '&', '&&&', '&&&&']), false);
console.log(testJackpot(['hee', 'heh', 'heh', 'heh']), false);
console.log(testJackpot(['SS', 'SS', 'SS', 'Ss']), false);
console.log(testJackpot(['SS', 'SS', 'Ss', 'Ss']), false);

//6. Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.
//
//     Return a boolean value (true or false).
// The string can contain any character.
//     When no x and no o are in the string, return true.

function XO(str) {
    var x = 0;
    var o = 0;

    str.toLowerCase().split('').forEach(function (imput) {
        if (imput == 'x') {
            x++;
        } else if (imput == 'o') {
            o++
        }
    })
    return x == o;
}

console.log(XO("ooxx"), true);
console.log(XO("xooxx"), false);
console.log(XO("ooxXm"), true);
console.log(XO("zpzpzpp"), true);
console.log(XO("zzoo"), false);
console.log(XO("Xo"), true);
console.log(XO("x"), false);
console.log(XO("o"), false);
console.log(XO("xxxoo"), false);
console.log(XO(""), true);