# [Two Sum](https://leetcode.com/problems/two-sum/) - Attempt 2

## Thought Process

Glancing at the problem again I'm thinking instead of looping through the array and trying to find if a pair of numbers add up to target what if the first thing done is finding the pairs of numbers that add up to target. Then check to see if any of those pairs are in the nums array. This would elimnate the need to use nested loops.

- Step 1: Find all pairs that equal target
- Step 2: loop through pairs to see if they exist in nums
- Step 3: return the indices

## Building Solution

### Step 1: Find all pairs that equal target

At first I was like okay just make a loop and find the pairs by subtracting the numbers from target.

`difference = target - nums[i]`

A pair would consist of difference and number.

Here I start to have some questions? Lets say the target is 9. Is 9 and 0 a vaild pair?

Upon further inspection the problems constraints are:
- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`

So Yes, 0 would be vaild but not only that negative numbers would be vaild as well which is not something I had thought about.

In fact, looking at the constraints has made me realize that this isn't going to work or rather this isn't going to be a better solution then attempt 1.

## Thought Process (....again)

All though I'm back at the drawing board not all is lost. Lets take the difference idea and expand on it. What if I loop through the array and created an object of differences `{difference: index, ...}`?

- Step 1: create object of differences
- Step 2: check if number in nums is in differences
- step 3: return indices

## Building Solution

### Step 1: Create object of differences

To create the object loop through nums making the difference the key and the index the value.

```js
const differences = {};
for (let i = 0; i < nums.length; i++){
    const diff = target - nums[i];
    differences[diff] = i;
}
```

### Step 2: Check if number in nums is in differences

To check if any of the numbers in nums are in differences I loop through the array then us the in operater.

```js
for (let i = 0; i < nums.length; i++){
        if (nums[i] in differences){
            return [i, differences[nums[i]]]
        }
    }
```

### Step 3: Return indices

The function returns `[i, differences[nums[i]]]`. nums[i] value in differences is the index of its pair. Lets take nums = [2,7,11,15] and target = 9. When the function finds 2 in differences the value is 1 which is the index of 7 in the array. This is represented as differences[nums[i]].

### Issues

This functions solves the problem.... sort of. The solution falls short due to the fact **you may not use the same element twice**. If lets say the inputs are [3,2,4] and 6. The function will return [0, 0] instead of [1, 2]. Changing the if statement to:

```js
if (nums[i] in differences && i != differences[nums[i]])
```
Will solve that edge case.

## Time Complexity

This solution does utilize a couple of for loops making the time complexity O(n) which is a pretty fair improvement over O(n^2) in attempt 1.









