// COMPLETE LeetCode 2667 (Create Hello World Function)
// const createHelloWorld = () => {
// 	return () => {
// 		return 'Hello World'
// 	}
// }
// const test1 = createHelloWorld()
// console.log(test1())

// COMPLETE LeetCode 2620 (Counter)
// const createCounter = (n) => {
// 	return () => {
// 		return n++
// 	}
// }
// const test2 = createCounter(5)
// console.log(test2(), test2(), test2())

// COMPLETE LeetCode 2704 (To Be Or Not To Be)
// const expect = (eVal) => {
// 	const notEqual = new Error('Not Equal')
// 	const equal = new Error('Equal')
// 	return {
// 		toBe: (aVal) => {
// 			try {
// 				return eVal === aVal
// 					? true
// 					: (() => {
// 							throw notEqual
// 					  })()
// 			} catch (err) {
// 				console.error(err.message)
// 			}
// 		},
// 		notToBe: (aVal) => {
// 			try {
// 				return eVal !== aVal
// 					? true
// 					: (() => {
// 							throw equal
// 					  })()
// 			} catch (err) {
// 				console.error(err.message)
// 			}
// 		},
// 	}
// }
// const test3 = expect(5).toBe(null)
// console.log(test3)

// COMPLETE LeetCode 2665 (Counter II)
// const createCounterII = (init) => {
// 	let curr = init
// 	return {
// 		inc: () => {return ++curr},
// 		dec: () => {return --curr},
// 		res: () => {return curr = init},
// 	}
// }
// const test4 = createCounterII(5)
// console.log(test4.inc(), test4.inc(), test4.inc(), test4.dec(), test4.res())

// COMPLETE LeetCode 2635 (Apply Transform Over Each Element in Array)
// const map = (arr, fn) => {
//   let newArr = []
//   for (let [i, el] of arr.entries()) {
//     newArr.push(fn(el, i))
//   }
//   return newArr
// }
// const test5 = map([1, 2, 3], function plusone(n) { return n + 1 })
// console.log(test5)

// COMPLETE LeetCode 2634 (Filter Elements from Array)
// const filter = (arr, fn) => {
//   let filteredArr = []
//   for (let [i, el] of arr.entries()) {
//     if (fn(el, i)) {
//       filteredArr.push(el)
//     }
//   }
//   return filteredArr
// }
// const test6 = filter([0, 10, 20, 30], function greaterThan10(n) { return n > 10 })
// console.log(test6)

// COMPLETE LeetCode 2626 (Array Reduce Transformation)
// const reduce = (nums, fn, init) => {
//   if  (nums.length === 0) return init
//   let val = init
//   for (let el of nums) {
//     val = fn(val, el)
//   }
//   return val
// }
// const test7 = reduce([1, 2, 3, 4], function sum(accum, curr) { return accum + curr }, 0)
// console.log(test7)

// COMPLETE LeetCode 2629 (Function Composition)
// const compose = (fns) => {
//   return (x) => {
//     for (let i = fns.length - 1; i >= 0; i--) {
//       x = fns[i](x)
//     }
//     return x
//   }
// }
// const test8 = compose([x => x + 1, x => x * x, x => 2 * x])(4)
// console.log(test8)

// COMPLETE LeetCode 2703 (Return Length of Arguments Passed)
// const argumentsLength = (...args) => {
//   return args.length
// }
// let args1 = [5]
// console.log(argumentsLength(...args1))
// let args2 = [{}, null, 3]
// console.log(argumentsLength(...args2))

// COMPLETE LeetCode 2666 (Allow One Function Call)
// const once = (fn) => {
// 	let hasBeenCalled = false
// 	let result
// 	return (...args) => {
// 		if (!hasBeenCalled) {
// 			hasBeenCalled = true
// 			result = fn(...args)
// 			return result
// 		}
// 		return undefined
// 	}
// }
// let fn = (a, b, c) => (a + b + c)
// let onceFn = once(fn)
// console.log(onceFn(1, 2, 3))
// console.log(onceFn(2, 3, 6))

// COMPLETE LeetCode 2623 (Memoize)
// const memoize = (fn) => {
// 	const cache = {}
// 	let count = 0
// 	return (...args) => {
// 		const argsKey = JSON.stringify(args)
// 		if (cache[argsKey] !== undefined) {
// 			let cacheResult = cache[argsKey]
// 			return { cacheResult, calls: count }
// 		}
// 		count += 1
// 		const result = fn(...args)
// 		cache[argsKey] = result
// 		return { result, calls: count }
// 	}
// }
// const sum = (a, b) => a + b
// const fib = (n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2))
// const fac = (n) => (n <= 1 ? 1 : fac(n - 1) * n)
// const memoizedSum = memoize(sum)
// const memoizedFib = memoize(fib)
// const memoizedFac = memoize(fac)
// console.log(memoizedSum(2, 2), memoizedSum(1, 2), memoizedSum(1, 2))
// console.log(memoizedFib(6), memoizedFib(7), memoizedFib(6))
// console.log(memoizedFac(3), memoizedFac(3), memoizedFac(5))

// PIN LeetCode <ChallengeId> (<ChallengeName>)
// const funcName = () => {

//   return
// }
// const test = funcName()
// console.log(test)
