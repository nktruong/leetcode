// Search Insert Position (Easy)
// https://leetcode.com/problems/search-insert-position/

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity. 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Constraints:

//     1 <= nums.length <= 104
//     -104 <= nums[i] <= 104
//     nums contains distinct values sorted in ascending order.
//     -104 <= target <= 104

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// given: array of unique integers + a integer value
// return: # of the target's index. if not seen, return the index of where it would be

var searchInsert = function(nums, target) {
    // declare index variable
    let index = 0

    // for loop through array
    for (let i=0; i<nums.length; i++){

        // if nums[i] === target -> return i
        // or if current value is smaller than target -> index = nums[i]    
        // if all else feels -> return index

        if(nums[i] === target || nums[i] > target){
            return i // ex: nums[1] === 5
        }
     }
    
    return nums.length
                
};

console.log(searchInsert([2,5,6,9], 5), 1) // 5 is located at index 1
console.log(searchInsert([8,12,15,28], 28), 3) // 5 is located at index 3
console.log(searchInsert([8,12,15,28], 13), 2) // 13 would be located at index 2
