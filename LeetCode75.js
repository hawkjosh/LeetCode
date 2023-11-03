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

// #8: Increasing Triplet Subsequence
const increasingTriplet = (nums) => {

}
console.log(increasingTriplet([1, 2, 3, 4, 5])) // true
console.log(increasingTriplet([5, 4, 3, 2, 1])) // false
console.log(increasingTriplet([2, 1, 5, 0, 4, 6])) // true