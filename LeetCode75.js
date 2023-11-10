// // #1: Merge Strings Alternately
// const mergeAlternately = (word1, word2) => {
//   // create a new array using Array.from() with first arg specifying array length (determined by max length of word1, word2) and second arg a mapping function to operate on each element of new array
//   // mapping function takes two args (first not used '_' and second 'i' for index) returning the char at index i of each word combined together, or an empty string if char is not defined at index for that word
//   // lastly, join the array to return the combined string
//   return Array.from({ length: Math.max(word1.length, word2.length) }, (_, i) => {
//     return (word1[i] || '').concat(word2[i] || '')
//   }).join('')
// }
// console.log(mergeAlternately('abc', 'pqr')) // 'apbqcr'
// console.log(mergeAlternately('ab', 'pqrs')) // 'apbqrs'
// console.log(mergeAlternately('abcd', 'pq')) // 'apbqcd

// // #2: Greatest Common Divisor of Strings
// const gcdOfStrings = (str1, str2) => {
// 	// short circuit to check if strings have gcd
// 	if (str1.concat(str2) !== str2.concat(str1)) return ''
//   // helper function to find gcd between two terms
// 	const gcd = (a, b) => {
// 		while (b) [a, b] = [b, a % b]
// 		return a
// 	}
//   // assign variable length set equal to gcd using str1 and str2 lengths as args
// 	let length = gcd(str1.length, str2.length)
//   // return str1 with gcd removed from it
// 	return str1.slice(0, length)
// }
// console.log(gcdOfStrings('ABCABC', 'ABC')) // 'ABC'
// console.log(gcdOfStrings('ABABAB', 'ABAB')) // 'AB'
// console.log(gcdOfStrings('LEET', 'CODE')) // ''

// // #3: Kids With the Greatest Number of Candies
// const kidsWithCandies = (candies, extraCandies) => {
//   // assign variable 'max' set equal to max value of 'candies' array
//   const max = Math.max(...candies)
//   // return map of 'candies' array with boolean value for each element plus 'extraCandies' compared to 'max'
//   return candies.map(count => count + extraCandies >= max)
// }
// console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)) // [true, true, true, false, true]
// console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)) // [true, false, false, false, false]
// console.log(kidsWithCandies([12, 1, 12], 10)) // [true, false, true]

// // #4: Can Place Flowers
// const canPlaceFlowers = (fb, n) => {
//   // assign variable 'openSpots' set equal to 0
//   let openSpots = 0
//   // loop over each element of 'fb' array beginning at index 0
//   for (let i = 0; i < fb.length; i++) {
//     // check if previous, current, and next element not equal to 1
//     if (fb[i - 1] !== 1 && fb[i] !== 1 && fb [i + 1] !== 1) {
//       // if true...
//       // set current iteration element equal to 1
//       fb[i] = 1
//       // increment 'openSpots' by 1
//       openSpots += 1
//     }
//   }
//   // return boolean value of 'openSpots' greater than or equal to 'n'
//   return openSpots >= n
// }
// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)) // true
// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)) // false
// console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2)) // false
// console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2)) // true
// console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1)) // true
// console.log(canPlaceFlowers([0, 0, 0], 2)) // true
// console.log(canPlaceFlowers([0], 1)) // true
// console.log(canPlaceFlowers([1], 1)) // false

// // #5: Reverse Vowels of a String
// const reverseVowels = (s) => {
//   // assign variable 'vowels' set equal to string containing lowercase and uppercase vowels
//   const vowels = 'aeiouAEIOU'
//   // assign variable 'sArr' set equal to 's' converted into an array for easier manipulation
//   const sArr = [...s]
//   // assign variable 'left' set equal to 0 for the left pointer
//   let left = 0
//   // assign variable 'right' set equal to last index of 'sArr' for the right pointer
//   let right = sArr.length - 1
//   // begin while loop with condition of 'left' less than 'right'
//   while (left < right) {
//     // start inner loop with condition of 'left' less than 'right' AND element of 'sArr' at 'left' index not a vowel
//     while (left < right && vowels.indexOf(sArr[left]) === -1) {
//       // if true then increment left by 1
//       left++
//     }
//     // start inner loop with condition of 'left' less than 'right' AND element of 'sArr' at 'right' index not a vowel
//     while (left < right && vowels.indexOf(sArr[right]) === -1) {
//       // if true then decrement right by 1
//       right--
//     }
//     // when conditions above are false...
//     // swap elements at 'left' and 'right' index
//     [sArr[left], sArr[right]] = [sArr[right], sArr[left]]
//     // increment 'left' by 1
//     left++
//     // decrement 'right' by 1
//     right--
//   }
//   // return joined 'sArr' to convert back to string
//   return sArr.join('')
// }
// console.log(reverseVowels('hello')) // holle
// console.log(reverseVowels('leetcode')) // 'leotcede'

// // #6: Reverse Words in a String
// const reverseWords = (s) => {
// 	// assign variable 'sArr' set equal to empty array
// 	const sArr = []
//   // trim whitespace from 's' on left and right sides
// 	s.trim()
//     // convert 's' into array split by spaces
// 		.split(' ')
//     // reverse order of the array
// 		.reverse()
//     // push each element in array not equal to empty string to 'sArr'
// 		.forEach((el) => el !== '' && sArr.push(el))
//   // return joined 'sArr' to convert back to string
// 	return sArr.join(' ')
// }
// console.log(reverseWords('the sky is blue')) // 'blue is sky the'
// console.log(reverseWords('  hello world  ')) // 'world hello'
// console.log(reverseWords('a good   example')) // 'example good a'

// // #7: Product of Array Except Self
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

// // #8: Increasing Triplet Subsequence
// const increasingTriplet = (nums) => {
//   // assign variable 'first' set equal to Infinity
//   let first = Infinity
//   // assign variable 'second' set equal to Infinity
//   let second = Infinity
//   // loop over each element of 'nums'
//   for (let num of nums) {
//     // if current iteration element 'num' less than 'first'
//     if (num <= first) {
//       // update 'first' to 'num'
//       first = num
//       // else if current iteration element 'num' less than 'second'
//     } else if (num <= second) {
//       // update 'second' to 'num'
//       second = num
//       // else return true
//     } else {
//       return true
//     }
//   }
//   // return false
//   return false
// }
// console.log(increasingTriplet([1, 2, 3, 4, 5])) // true
// console.log(increasingTriplet([5, 4, 3, 2, 1])) // false
// console.log(increasingTriplet([2, 1, 5, 0, 4, 6])) // true

// // #9: String Compression
// const compress = (chars) => {
//   // assign variables 'read' and 'write' each set equal to 0
// 	let read = 0, write = 0
//   // begin while loop with condition 'read' less than length of 'chars' array
// 	while (read < chars.length) {
//     // assign variable 'char' set equal to 'chars' array value at index 'read'
// 		let char = chars[read]
//     // assign variable 'count' set equal to 0
// 		let count = 0
//     // start inner loop with condition 'read' less than length of 'chars' array AND 'char' equal to array value at index 'read'
// 		while (read < chars.length && chars[read] === char) {
//       // increment 'read' by 1
// 			read++
//       // increment 'count' by 1
// 			count++
// 		}
//     // update value of 'chars' array at index 'write' incremented by 1 to 'char'
// 		chars[write++] = char
//     // check if 'count' greater than 1
// 		if (count > 1) {
//       // if yes...
//       // assign variable 'countStr' set equal to 'count' converted into string
// 			const countStr = count.toString()
//       // loop over each element 'digit' of 'countStr' and update value of 'chars' array at index 'write' incremented by 1 to 'digit'
// 			for (let digit of countStr) chars[write++] = digit
// 		}
// 	}
//   // return 'write'
// 	return write
// }
// console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c'])) // 6
// console.log(compress(['a'])) // 1
// console.log(compress(['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'])) // 4

// // #10: Move Zeroes
// const moveZeroes = (nums) => {
//   const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//   // assign left pointer i and right pointer j
//   let i = 0, j = i + 1
//   // begin iteration loop while right pointer is less than length of nums array
//   while (j < nums.length) {
//     // check if value of nums[i] NOT equal to 0
//     if (nums[i] !== 0) {
//       // if nums[i] NOT equal to 0, increment both left and right pointers by 1
//       i++
//       j++
//     } else {
//       // if nums[i] is equal to 0, check if value of nums[j] NOT equal to 0
//       if (nums[j] !== 0) {
//         // if nums[j] NOT equal to 0, swap values of nums[i] and nums[j] and increment left pointer by 1
//         swap(nums, i, j)
//         i++
//       }
//       // if nums[j] is equal to 0, increment right pointer by 1
//       j++
//     }
//   }
//   // return nums array
//   return nums
// }
// console.log(moveZeroes([0, 1, 0, 3, 12])) // [1, 3, 12, 0, 0]
// console.log(moveZeroes([0])) // [0]
// console.log(moveZeroes([0, 0, 1])) // [1, 0, 0]

// // #11: Is Subsequence
// const isSubsequence = (s, t) => {
//   // assign variables i and j for left and right pointers
//   let i = 0, j = 0
//   // begin loop while right pointer less than length of t
//   while (j < t.length) {
//     // if char of s NOT equal to char of t
//     if (s[i] !== t[j]) {
//       // increment j by 1
//       j++
//       // if char of s equals char of t
//     } else {
//       // increment both i and j by 1
//       i++
//       j++
//     }
//   }
//   // return true if i equals length of s, else return false
//   return i === s.length ? true : false
// }
// console.log(isSubsequence('abc', 'cab')) // false
// console.log(isSubsequence('abc', 'abc')) // true
// console.log(isSubsequence('abc', 'ahbgdc')) // true
// console.log(isSubsequence('axc', 'ahbgdc')) // false
// console.log(isSubsequence('', '')) // true
// console.log(isSubsequence('', 'xyz')) // true

// // #12: Container With Most Water
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

// // #13: Max Number of K-Sum Pairs
// const maxOperations = (nums, k) => {
//   // assign variable numsMap to keep track of frequency of numbers in nums array (key = numbers, value = frequency)
//   const numsMap = new Map()
//   // assign variable count set equal to 0 to hold our total operations
//   let count = 0
//   // begin for loop over each element num of nums array
//   for (let num of nums) {
//     // assign variable complement set equal to difference of k and current iteration num
//     const complement = k - num
//     // if numsMap has key of complement with value greater than 0...
//     if (numsMap.has(complement) && numsMap.get(complement) > 0) {
//       // increment count by 1, decrease value by 1
//       count += 1
//       numsMap.set(complement, numsMap.get(complement) - 1)
//       // if numsMap does NOT have key of complement with value greater than 0...
//     } else {
//       // add key of num to numsMap, set value to current value plus one (if already exists) otherwise 0 plus 1
//       numsMap.set(num, (numsMap.get(num) || 0) + 1)
//     }
//   }
//   // return count
//   return count
// }
// console.log(maxOperations([1, 2, 3, 4], 5)) // 2
// console.log(maxOperations([3, 1, 3, 4, 3], 6)) // 1
// console.log(maxOperations([2, 2, 2, 3, 1, 1, 4, 1], 4)) // 2
// console.log(maxOperations([5, 6, 2, 2, 2, 3, 1, 1, 4, 1], 4)) // 2
// console.log(maxOperations([4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4], 2)) // 2

// // #14: Maximum Average Subarray
// const findMaxAverage = (nums, k) => {
//   // short circuit to check 'nums' length equal to 0 and return 0
//   if (nums.length === 0) return 0
//   // assign variable 'sum' set equal to 0
//   let sum = 0
//   // begin for loop at index 0 while index less than 'k' and incrementing by 1 each iteration
//   for (let i = 0; i < k; i++) {
//     // update 'sum' value to total sum of first 'k' elements of 'nums' array
//     sum += nums[i]
//   }
//   // assign variable 'maxSum' set equal to 'sum' value just calculated
//   let maxSum = sum
//   // begin for loop at index 'k' while index less than length of 'nums' array and incrementing by 1 each iteration
//   for (let i = k; i < nums.length; i++) {
//     // update 'sum' value by removing first element and adding next element of each iteration
//     sum = sum - nums[i - k] + nums [i]
//     // update 'maxSum' value to be maximum of current 'maxSum' and newly calculated 'sum'
//     maxSum = Math.max(maxSum, sum)
//   }
//   // return 'maxSum' divide by 'k' to get maximum average
//   return maxSum / k
// }
// console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)) // 12.75
// console.log(findMaxAverage([5], 1)) // 5
// console.log(findMaxAverage([0, 1, 1, 3, 3], 4)) // 2
// console.log(findMaxAverage([], 3)) // 0