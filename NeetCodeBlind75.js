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

// // #10: 3Sum
// const threeSum = (nums) => {
// 	// assign variable 'result' set equal to empty array
// 	const result = []
// 	// sort 'nums' array in ascending order
// 	nums.sort((a, b) => a - b)
// 	// loop over all elements in 'nums' array beginning at index 0
// 	for (let i = 0; i < nums.length; i++) {
// 		// assign variable 'a' set equal to 'nums' element at index 'i'
// 		const a = nums[i]
// 		// break if 'a' greater than 0
// 		if (a > 0) break
// 		// continue is 'i' greater than 0 AND 'a' previous element in 'nums' array
// 		if (i > 0 && a === nums[i - 1]) continue
// 		// assign variable 'l' set equal to i + 1 for the left pointer
// 		let l = i + 1
// 		// assign variable 'r' set equal to last index of 'nums' for the right pointer
// 		let r = nums.length - 1
// 		// begin while loop with condition of 'l' less than 'r'
// 		while (l < r) {
// 			// assign variable 'threeSum' set equal to sum of 'a' and 'num' elements at 'l' and 'r' index
// 			const threeSum = a + nums[l] + nums[r]
// 			// check if 'threeSum' greater than 0
// 			if (threeSum > 0) {
// 				// if yes then decrement 'r' by 1
// 				r--
// 				// check if 'threeSum' less than 0
// 			} else if (threeSum < 0) {
// 				// if yes then increment 'l' by 1
// 				l++
// 				// if above checks fail then...
// 			} else {
// 				// push 'a' and 'num' elements at 'l' and 'r' index to 'result' array
// 				result.push([a, nums[l], nums[r]])
// 				// increment 'l' by 1
// 				l++
// 				// decrement 'r' by 1
// 				r--
// 				// inner while loop with condition 'num' elements at index 'l' and previous to 'l' equal AND 'l' less than 'r'
// 				while (nums[l] === nums[l - 1] && l < r) {
// 					// increment 'l' by 1
// 					l++
// 				}
// 			}
// 		}
// 	}
// 	// return 'result' array
// 	return result
// }
// console.log(threeSum([-1, 0, 1, 2, -1, -4])) // [[-1, -1, 2], [-1, 0, 1]]
// console.log(threeSum([0, 1, 1])) // []
// console.log(threeSum([0, 0, 0])) // [[0, 0, 0]]

// // #11: Container With Most Water
// const maxArea = (height) => {
// 	// assign variable 'l' set equal to zero for left pointer
// 	let l = 0
// 	// assign variable 'r' set equal to last index of 'height' for right pointer
// 	let r = height.length - 1
// 	// assign variable 'maxArea' set equal to 0
// 	let maxArea = 0
// 	// begin while loop with condition 'l' less than 'r'
// 	while (l < r) {
// 		// assign variable 'currWidth' set equal to difference between 'r' and 'l'
// 		const currWidth = r - l
// 		// assign variable 'currHeigh' set equal to max of 'height' elements at index 'l' and 'r'
// 		const currHeight = Math.min(height[l], height[r])
// 		// assign variable 'currArea' set equal to product of 'currWidth' and 'currHeight'
// 		const currArea = currWidth * currHeight
// 		// update 'maxArea' to max of it's current value and 'currArea'
// 		maxArea = Math.max(maxArea, currArea)
// 		// if element of 'height' at index 'l' less than at index 'r', increment 'l' by 1, else decrement 'r' by 1
// 		height[l] < height[r] ? l++ : r--
// 	}
// 	// return 'maxArea'
// 	return maxArea
// }
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])) // 49
// console.log(maxArea([1, 1])) // 1

// // #12: Best Time to Buy and Sell Stock
// const maxProfit = (prices) => {
//   // assign variable 'max' set equal to 0 to hold maximum profit amount
//   let max = 0
//   // assign variable minPrice set equal to first price of 'prices' array
//   let minPrice = prices[0]
//   // begin for loop at index 1 while index less than length of 'prices' array, incrementing by 1 each iteration
//   for (let i = 1; i < prices.length; i++) {
//     // conditional to check if current iteration price less than 'minPrice'
//     if (prices[i] < minPrice) {
//       // if yes, update 'minPrice' to current iteration price
//       minPrice = prices[i]
//       // if no...
//     } else {
//       // assign variable 'check' set equal to difference of current iteration price and 'minPrice'
//       let check = prices[i] - minPrice
//       // update 'max' to maximum value between current 'max' and 'check'
//       max = Math.max(max, check)
//     }
//   }
//   // return 'max'
//   return max
// }
// console.log(maxProfit([7, 1, 5, 3, 6, 4])) // 5
// console.log(maxProfit([7, 6, 5, 3, 1])) // 0

// // BONUS: Valid Sudoku
// const isValidSudoku = (board) => {
//   // begin for loop at i = 0 while i less than 9 and incrementing by 1 each iteration
//   for (let i = 0; i < 9; i++) {
//     // assign variables row, col, and box each set equal to a new Set()
//     let row = new Set(), col = new Set(), box = new Set()
//     // begin nested for loop at j = 0 while j less than 9 and incrementing by 1 each iteration
//     for (let j = 0; j < 9; j++) {
//       // assign variables _row set equal to board[i][j], _col set equal to board[j][i], and _box set equal to board[<see math ↓>][<see math ↓>]
//       let _row = board[i][j], _col = board[j][i], _box = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)]
//       // if _row NOT equal to '.'
//       if (_row != '.') {
//         // return false if the set row already has _row, else add _row to the set row
//         if (row.has(_row)) return false
//         row.add(_row)
//       }
//       // if _col NOT equal to '.'
//       if (_col != '.') {
//         // return false if the set col already has _col, else add _col to the set col
//         if (col.has(_col)) return false
//         col.add(_col)
//       }
//       // if _box NOT equal to '.'
//       if (_box != '.') {
//         // return false if the set box already has _box, else add _box to the set box
//         if (box.has(_box)) return false
//         box.add(_box)
//       }
//     }
//   }
//   // return true if everything else above passes
//   return true
// }
// console.log(
// 	isValidSudoku([
// 		['5', '3', '.', '.', '7', '.', '.', '.', '.'],
// 		['6', '.', '.', '1', '9', '5', '.', '.', '.'],
// 		['.', '9', '8', '.', '.', '.', '.', '6', '.'],
// 		['8', '.', '.', '.', '6', '.', '.', '.', '3'],
// 		['4', '.', '.', '8', '.', '3', '.', '.', '1'],
// 		['7', '.', '.', '.', '2', '.', '.', '.', '6'],
// 		['.', '6', '.', '.', '.', '.', '2', '8', '.'],
// 		['.', '.', '.', '4', '1', '9', '.', '.', '5'],
// 		['.', '.', '.', '.', '8', '.', '.', '7', '9'],
// 	])
// ) // true
// console.log(
// 	isValidSudoku([
// 		['8', '3', '.', '.', '7', '.', '.', '.', '.'],
// 		['6', '.', '.', '1', '9', '5', '.', '.', '.'],
// 		['.', '9', '8', '.', '.', '.', '.', '6', '.'],
// 		['8', '.', '.', '.', '6', '.', '.', '.', '3'],
// 		['4', '.', '.', '8', '.', '3', '.', '.', '1'],
// 		['7', '.', '.', '.', '2', '.', '.', '.', '6'],
// 		['.', '6', '.', '.', '.', '.', '2', '8', '.'],
// 		['.', '.', '.', '4', '1', '9', '.', '.', '5'],
// 		['.', '.', '.', '.', '8', '.', '.', '7', '9'],
// 	])
// ) // false
// console.log(
// 	isValidSudoku([
// 		['.', '.', '4', '.', '.', '.', '6', '3', '.'],
// 		['.', '.', '.', '.', '.', '.', '.', '.', '.'],
// 		['5', '.', '.', '.', '.', '.', '.', '9', '.'],
// 		['.', '.', '.', '5', '6', '.', '.', '.', '.'],
// 		['4', '.', '3', '.', '.', '.', '.', '.', '1'],
// 		['.', '.', '.', '7', '.', '.', '.', '.', '.'],
// 		['.', '.', '.', '5', '.', '.', '.', '.', '.'],
// 		['.', '.', '.', '.', '.', '.', '.', '.', '.'],
// 		['.', '.', '.', '.', '.', '.', '.', '.', '.'],
// 	])
// ) // false