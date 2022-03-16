# [Two Sum](https://leetcode.com/problems/two-sum/) - Attempt 1

Immediately my mind jumps to having two iterators (i and j) looping through the nums array. While looping through the array the function will check to see if the numbers `nums[i] and nums[j]` add up to the target number and if so it will return the indices.

## Time Complexity

The issue is that this solution quite brute force-ish and is not fast. The use of nested loops will make the time complexity O(n^2).