// // #1: Contains Duplicate
// const containsDuplicate = (nums) => {
//   // sort 'nums' in ascending order
//   nums.sort((a, b) => a - b)
//   // assign variable 'count' set equal to an empty array
//   let count = []
//   // loop over each 'num' element of 'nums' array
//   for (let num of nums) {
//     // check if 'count' array does NOT include current iteration 'num'
//     if (!count.includes(num)) {
//       // if no, then add the current iteration 'num' to the 'count' array
//       count.push(num)
//       // if yes, then return true
//     } else return true
//   }
//   // returns false if the loop above finishes without returning anything
//   return false
// }
// console.log(containsDuplicate([1,2,3,1])) // true
// console.log(containsDuplicate([1,2,3,4])) // false
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])) // true

// // #2: Valid Anagram
// const isAnagram = (str1, str2) => {
//   // short circuit to check if lengths of 'str1' and 'str2' are the same
//   if (str1.length !== str2.length) return false
//   // assign variable 'count' set equal to empty object
//   let count = {}
//   // loop over characters 'char' of 'str1', check if key 'char' NOT in 'count' object, if no then add with value of 1, if yes then increment value by 1
//   for (let char of str1) !count[char] ? count[char] = 1 : count[char] += 1
//   // loop over characters 'char' of 'str2', check if key 'char' NOT in 'count' object, if no then add with value of 1, if yes then decrement value by 1
//   for (let char of str2) !count[char] ? count[char] = 1 : count[char] -= 1
//   // loop over keys 'key' in 'count' object, check if value of 'count[key]' NOT equal to 0, if no then return false, if yes then return true
//   for (let key in count) return count[key] !== 0 ? false : true
// }
// console.log(isAnagram('scare', 'cares')) // true
// console.log(isAnagram('nap', 'pat')) // false
// console.log(isAnagram('thing', 'night')) // true
// console.log(isAnagram('best', 'bet')) // false

// // #3: Two Sum
// const twoSum = (nums, target) => {
//   // assign variable 'map' set equal to empty object
//   let map = {}
//   // loop over each number in 'nums' array beginning at index 0
//   for (let i = 0; i < nums.length; i++) {
//     // assign variable 'compNum' set equal to the differnce between 'target' and current iteration number 'nums[i]'
//     let compNum = target - nums[i]
//     // check if 'map' object has defined property with key 'compNum' and returns array containing 'map[compNum]' and 'i'
//     if (map[compNum] !== undefined) return [map[compNum], i]
//     // set property in 'map' object with key 'nums[i]' and value 'i'
//     map[nums[i]] = i
//   }
//   // returns null if the loop above finishes without returning anything
//   return null
// }
// console.log(twoSum([2, 7, 11, 15], 9)) // [0, 1]
// console.log(twoSum([3, 2, 4], 6)) // [1, 2]
// console.log(twoSum([3, 3], 6)) // [0, 1]

// // #4: Group Anagrams
// const groupAnagrams = (strs) => {
//   // short circuit to check if 'strs' is an empty array
//   if (!strs.length) return []
//   // assign variable 'groups' set equal to empty object
//   let groups = {}
//   // loop over each 'word' element of 'strs' array
//   for (let word of strs) {
//     // assign variable 'sorted' set equal to the alphabetically sorted version of current iteration 'word'
//     let sorted = word.split('').sort().join('')
//     // check if 'groups' object does NOT contain a property with key of current iteration 'sorted'
//     if (!groups[sorted]) {
//       // if no, then set property in 'groups' object with key of 'sorted' and value of an array containing current iteration 'word'
//       groups[sorted] = [word]
//       // if yes, then add the current iteration 'word' to the pre-existing array value of 'groups[sorted]'
//     } else groups[sorted].push(word)
//   }
//   // return array of the values of 'groups' object
//   return Object.values(groups)
// }
// console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])) // [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]
// console.log(groupAnagrams(['night', 'care', 'scare', 'race', 'bets', 'thing', 'best'])) // [['night', 'thing'], ['care', 'race'], ['scare'], ['bets', 'best']]
// console.log(groupAnagrams([''])) // [['']]

