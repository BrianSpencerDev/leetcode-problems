/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const differences = {};
    
    for (let i = 0; i < nums.length; i++){
        const diff = target - nums[i];
        differences[diff] = i;
    }

    for (let i = 0; i < nums.length; i++){
        if (nums[i] in differences && i != differences[nums[i]]){
            return [i, differences[nums[i]]]
        }
    }
};