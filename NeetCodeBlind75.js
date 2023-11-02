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
// console.log(twoSum([3, 5, 7, 9, 11], 18)) // [2, 4]

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

// // #5: Top K Frequent Elements
// const topKFrequent = (nums, k) => {
//   // assign variable 'count' set equal to empty object
//   let count = {}
//   // loop over each 'num' element of 'nums' array, check if key 'num' NOT in 'count' object, if no then add with value of 1, if yes then increment value by 1
//   for (let num of nums) !count[num] ? count[num] = 1 : count[num] +=1
//   // assign variable 'sortedArr' set equal to an array of 'count' object entries (each entry an array [key, value]) sorted by value in descending order
//   let sortedArr = Object.entries(count).sort((a, b) => b[1] - a[1])
//   // assign variable 'result' set equal to the first 'k' elements of 'sortedArr'
//   let result = sortedArr.slice(0, k)
//   // return map of 'result' containing key of each element (index 0) of result converted to integer
//   return result.map(num => parseInt(num[0]))
// }
// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)) // [1, 2]
// console.log(topKFrequent([3, 3, 3, 2, 1, 1], 2)) // [3, 1]
// console.log(topKFrequent([1], 1)) // [1]

// // #6: Product of Array Except Self
// const productExceptSelf = (nums) => {
//   // assign variable 'answer' set equal to empty array
//   let answer = []
//   // assign variable 'leftProduct' set equal to 1
//   let leftProduct = 1
//   // assign variable 'rightProduct' set equal to 1
//   let rightProduct = 1
//   // loop over each element of 'nums' array beginning at index 0
//   for (let i = 0; i < nums.length; i++) {
//     // set element of 'answer' array at current iteration index equal to 'leftProduct'
//     answer[i] = leftProduct
//     // update 'leftProduct' to it's current value times the current iteration element of 'nums' array
//     leftProduct *= nums[i]
//   }
//   // loop over each element of 'nums' array beginning at the index before the last and moving to the left
//   for (let i = nums.length - 2; i >= 0; i--) {
//     // update 'rightProduct' to it's current value times the current iteration element of 'nums' array
//     rightProduct *= nums[i + 1]
//     // set element of 'answer' array at current iteration index equal to 'rightProduct'
//     answer[i] *= rightProduct
//   }
//   // return 'answer' array
//   return answer
// }
// console.log(productExceptSelf([1, 2, 3, 4])) // [24, 12, 8, 6]
// console.log(productExceptSelf([-1, 1, 0, -3, 3])) // [0, 0, 9, 0, 0]

// // #7: Encode and Decode Strings
// const spyCode = () => {
// 	const encode = (strs) =>
// 		`${strs.map((str) => str.length).join('.')}$${strs
// 			.map((str) =>
// 				str
// 					.split('')
// 					.map((ch) => String.fromCharCode(ch.charCodeAt() + 5))
// 					.join('')
// 			)
// 			.join('')}`
// 	const decode = (str) => {
// 		let strs = []
// 		const wordChars = str.split(String.fromCharCode(36))[1].split('')
// 		str
// 			.split(String.fromCharCode(36))[0]
// 			.split('.')
// 			.forEach((length) => strs.push(wordChars.splice(0, length)))
// 		return strs.map((word) =>
// 			word.map((char) => String.fromCharCode(char.charCodeAt() - 5)).join('')
// 		)
// 	}
// 	return { encode, decode }
// }
// console.log(spyCode().encode(['lint', 'code', 'love', 'you'])) // '4.4.4.3$qnsyhtijqt{j~tz'
// console.log(spyCode().decode('4.4.4.3$qnsyhtijqt{j~tz')) // ['lint', 'code', 'love', 'you']
// console.log(spyCode().encode(['we', 'say', ':', 'yes'])) // '2.3.1.3$|jxf~?~jx'
// console.log(spyCode().decode('2.3.1.3$|jxf~?~jx')) // ['we', 'say', ':', 'yes']
// console.log(spyCode().encode(['Go', 'big', 'orange!'])) // '2.3.7$Ltgnltwfslj&'
// console.log(spyCode().decode('2.3.7$Ltgnltwfslj&')) // ['Go', 'big', 'orange!']

// // #8: Longest Consecutive Sequence
// const longestConsecutive = (nums) => {
// 	// assign variable 'numSet' set equal to new Set construction of 'nums' array
// 	const numSet = new Set(nums)
// 	// assign variable 'longestStreak' set equal to 0
// 	let longestStreak = 0
// 	// loop over each element 'num' of 'numSet'
// 	for (let num of numSet) {
// 		// check if 'numSet' does NOT contain element with value of current iteration 'num' minus one
// 		if (!numSet.has(num - 1)) {
// 			// if no then assign variable 'currentNum' set equal to current iteration 'num'
// 			let currentNum = num
// 			// if no then assign variable 'currentStreak' set equal to 1
// 			let currentStreak = 1
// 			// inner loop that conditionally checks if 'numset' contains element with value of 'currentNum' plus one
// 			while (numSet.has(currentNum + 1)) {
// 				// if yes then increment 'currentNum' and 'currentStreak' each by one
// 				currentNum += 1
// 				currentStreak += 1
// 			}
// 			// set 'longestStreak' to the max between it's current value and value of 'currentStreak'
// 			longestStreak = Math.max(longestStreak, currentStreak)
// 		}
// 	}
// 	// return 'longestStreak'
// 	return longestStreak
// }
// console.log(longestConsecutive([1, 2, 3, 4, 5])) // 5
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2])) // 4
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])) // 9

// // #9: Valid Palindrome
// const isPalindrome = (s) => {
// 	// change all uppercase letters to lowercase letters and remove all non-alphanumeric characters from 's'
// 	s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
// 	// assign variable 'sReversed' set equal to reverse order of 's'
// 	const sReversed = s.split('').reverse().join('')
// 	// return boolean checking if 's' equals 'sReversed'
// 	return s === sReversed
// }
// console.log(isPalindrome('A man, a plan, a canal: Panama')) // true
// console.log(isPalindrome('race a car')) // false
// console.log(isPalindrome(' ')) // true

// #10: 3Sum
const threeSum = (nums) => {
	// sort 'nums' array in ascending order
	nums.sort((a, b) => a - b)
	// assign variable 'result' set equal to empty array
	const result = []
	// loop over all but last two elements in 'nums' array beginning at index 0
	for (let i = 0; i < nums.length - 2; i++) {
		// check if index is 0 or if index greater than 0 AND elements of 'nums' at current and previous index are not equal
		if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
			// assign variable 'left' set equal to i + 1 for the left pointer
			let left = i + 1
			// assign variable 'right' set equal to last index of 'nums' for the right pointer
			let right = nums.length - 1
			// assign variable 'target' set equal to negative the current iteration value for the target pointer
			const target = -nums[i]
			// begin while loop with condition 'left' less than 'right'
			while (left < right) {
				// check if sum of 'num' elements at 'left' and 'right' index equals 'target'
				if (nums[left] + nums[right] === target) {
					// if yes...
					// push 'num' elements at 'left', 'right', and current iteration index to 'result' array
					result.push(nums[i], nums[left], nums[right])
					// increment 'left' by 1 while 'left' is less than 'right' AND 'nums' elements at 'left' and one more than 'left' are equal
					while (left < right && nums[left] === nums[left + 1]) left++
					// decrement 'right' by 1 while 'left' is less than 'right' AND 'nums' elements at 'right' and one less than 'right' are equal
					while (left < right && nums[right] === nums[right - 1]) right--
					// increment 'left' by 1
					left++
					// decrement 'right' by 1
					right--
					// if no then check if 'num' elements at 'left' and 'right' index less than 'target'
				} else if (nums[left] + nums[right] < target) {
					// if yes then increment 'left' by 1
					left++
				} else {
					// if all above fails then decrement 'right' by 1
					right --
				}
			}
		}
	}
	// return 'result' array
	return result
}
console.log(threeSum([-1, 0, 1, 2, -1, -4])) // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([0, 1, 1])) // []
console.log(threeSum([0, 0, 0])) // [[0, 0, 0]]