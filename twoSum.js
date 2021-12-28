// Two Sum (Easy)
// https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

//     2 <= nums.length <= 104
//     -109 <= nums[i] <= 109
//     -109 <= target <= 109
//     Only one valid answer exists.
 
// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// given: array of integers (2 or more pos/neg) + one integer (pos/neg)
// return: array of indices of the two numbers from the _og array_ that add up to the _target_

var twoSum = function(nums, target) {
    
    for (let i=0; i<nums.length; i++){
        for (let j=0; j<nums.length; j++){
            if((i !== j) && (nums[i] + nums[j] === target)){
                return [i,j]
            }
        }
    }
};

console.log(twoSum([2,3,5], 8), [1,2]) // nums[1] = 3. nums[5] = 5. only 3+5 in the array can add up to 8
console.log(twoSum([1,2,7], 3), [0,1]) // nums[0] = 1. nums[1] = 2. only 1+2 in the array can add up to 3
console.log(twoSum([6,12,2,65], 71), [0,3]) // nums[0] = 6. nums[3] = 65. only 6+65 in the array can add up to 71
