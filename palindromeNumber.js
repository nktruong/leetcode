// Palindrome Number
// https://leetcode.com/problems/palindrome-number/

// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:
// -231 <= x <= 231 - 1
 
// Follow up: Could you solve it without converting the integer to a string?

/**
 * @param {number} x
 * @return {boolean}
 */

// given: integer (neg or pos)
// return: boolean if it is truly a palindrome > return true, if not then > return false

var isPalindrome = function(x) {
    // turn into string
    // initiate a variable of the reversed progess
    
    let integer = (x + '').split('')
    let reversed = ''
    
    // for loop
        // add current num as a string to the variable
    
    for(let i = 0; i < integer.length; i++){
        reversed = integer[i] + reversed
    }
    
    console.log(reversed)
    // return completed reverse #
    if(+reversed === x){
        return true
    } else {
        return false
    }
};

console.log(isPalindrome(40), false)
console.log(isPalindrome(404), true)
console.log(isPalindrome(-55), false)
