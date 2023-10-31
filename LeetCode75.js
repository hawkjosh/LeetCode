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
