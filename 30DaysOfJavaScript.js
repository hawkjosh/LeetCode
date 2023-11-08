// NOTES → Closures
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

// NOTES → Basic Array Transformations
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

// NOTES → Function Transformations
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

// NOTES → Promises and Time
// COMPLETE LeetCode 2723 (Add Two Promises)
// const addTwoPromises = async (promise1, promise2) => {
//   let resolve1 = await promise1
//   let resolve2 = await promise2
//   let promise3 = resolve1 + resolve2
//   return promise3
// }
// addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log)

// COMPLETE LeetCode 2621 (Sleep)
// const sleep = async (millis) => {
//   return new Promise((resolve) => setTimeout(resolve, millis))
// }
// let t = Date.now()
// sleep(100).then(() => console.log(Date.now() - t)) // 100

// COMPLETE LeetCode 2715 (Timeout Cancellation)
// const cancellable = (fn, args, t) => {
// 	const timeoutId = setTimeout(() => {
// 		fn(...args)
// 	}, t)
// 	const cancelFn = () => {
// 		clearTimeout(timeoutId)
// 	}
// 	return cancelFn
// }
// const result = []
// const fn = (x) => x * 5
// const args = [2], t = 20, cancelT = 50
// const start = performance.now()
// const log = (...argsArr) => {
// 	const diff = Math.floor(performance.now() - start)
// 	result.push({ time: diff, returned: fn(...argsArr) })
// }
// const cancel = cancellable(log, args, t)
// const maxT = Math.max(t, cancelT)
// setTimeout(() => {
// 	cancel()
// }, cancelT)
// setTimeout(() => {
// 	console.log(result) // [{ time: 20,returned: 10 }]
// }, maxT + 15)

// COMPLETE LeetCode 2725 (Interval Cancellation)
// const cancellable = (fn, args, t) => {
//   fn(...args)
// 	const intervalId = setInterval(() => {
// 		fn(...args)
// 	}, t)
// 	const cancelFn = () => {
// 		clearInterval(intervalId)
// 	}
// 	return cancelFn
// }
// const result = []
// const fn = (x) => x * 2
// const args = [4], t = 35, cancelT = 190
// const start = performance.now()
// const log = (...argsArr) => {
//   const diff = Math.floor(performance.now() - start)
//   result.push({time: diff, returned: fn(...argsArr)})
// }
// const cancel = cancellable(log, args, t)
// setTimeout(() => {
//   cancel()
// }, cancelT)
// setTimeout(() => {
// console.log(result) // [{time: 0, returned: 8}, {time: 35, returned: 8}, {time: 70, returned: 8}, {time: 105, returned: 8}, {time: 140, returned: 8}, {time: 175, returned: 8}]
// }, cancelT + t + 15)

// TODO LeetCode 2637 (Promise Time Limit)
// const timeLimit = (fn, t) => {
// 	return async (...args) => {}
// }
// const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100)
// limited(150).catch(console.log) // 'Time Limit Exceeded' at t = 100ms

// TODO LeetCode 2622 (Cache With Time Limit)
// const TimeLimitedCache = () => {}
// TimeLimitedCache.prototype.set = (key, value, duration) => {}
// TimeLimitedCache.prototype.get = (key) => {}
// TimeLimitedCache.prototype.count = () => {}
// const timeLimitedCache = new TimeLimitedCache()
// timeLimitedCache.set(1, 42, 1000) // false
// timeLimitedCache.get(1) // 42
// timeLimitedCache.count() // 1

// TODO LeetCode 2627 (Debounce)
// const debounce = (fn, t) => {
//   return function(...args) {}
// }
// const log = debounce(console.log, 100)
// log('Hello') // cancelled
// log('Hello') // cancelled
// log('Hello') // Logged at t=100ms

// TODO LeetCode 2721 (Execute Asynchronous Functions in Parallel)
// const promiseAll = (functions) => {}
// const promise = promiseAll([() => new Promise(res => res(42))])
// promise.then(console.log) // [42]

// NOTES → JSON
// COMPLETE LeetCode 2727 (Is Object Empty)
// const isEmpty = (obj) => {
//   return Object.keys(obj).length === 0
// }
// console.log(isEmpty({ 'x': 5, 'y': 42 })) // false
// console.log(isEmpty({})) // true
// console.log(isEmpty([null, false, 0])) // false

// COMPLETE LeetCode 2677 (Chunk Array)
// const chunk = (arr, size) => {
// 	let chunkedArr = []
// 	for (let i = 0; i < arr.length; i += size) {
// 		chunkedArr.push(arr.slice(i, i + size))
// 	}
// 	return chunkedArr
// }
// console.log(chunk([1, 2, 3, 4, 5], 1)) // [[1], [2], [3], [4], [5]]
// console.log(chunk([1, 9, 6, 3, 2], 3)) // [[1, 9, 6], [3, 2]]
// console.log(chunk([8, 5, 3, 2, 6], 6)) // [[8, 5, 3, 2, 6]]
// console.log(chunk([], 1)) // []

// COMPLETE LeetCode 2619 (Array Prototype Last)
// Array.prototype.last = function() {
//   return this.length === 0 ? -1 : this[this.length - 1]
// }
// console.log([1, 2, 3].last()) // 3
// console.log([].last()) // -1
// console.log([1, 3, 5, 7, 9].last()) // 9
// console.log([2, 4, undefined, 8, null].last()) // null
// console.log([{key: 'value'}, Infinity, undefined].last()) // undefined

// TODO LeetCode 2631 (Group By)
// Array.prototype.groupBy = (fn) => {}
// [1, 2, 3].groupBy(String) // { '1': [1], '2': [2], '3': [3] }

// COMPLETE LeetCode 2724 (Sort By)
// const sortBy = (arr, fn) => {
//   return arr.sort((a, b) => fn(a) - fn(b))
// }
// console.log(sortBy([5, 4, 1, 2, 3], (x) => x)) // [1, 2, 3, 4, 5]
// console.log(sortBy([{ 'x': 1 }, { 'x': 0 }, { 'x': -1 }], (d) => d.x)) // [{ 'x': -1 }, { 'x': 0 }, { 'x': 1 }]
// console.log(sortBy([[3, 4], [5, 2], [10, 1]], (x) => x[1])) // [[10, 1], [5, 2], [3, 4]]

// TODO LeetCode 2722 (Join Two Arrays by ID)
// const join = (arr1, arr2) => {}
// console.log(join([{ 'id': 1, 'x': 1 }, { 'id': 2, 'x': 9 }], [{ 'id': 3, 'x': 5 }])) // [{ 'id': 1, 'x': 1 }, { 'id': 2, 'x': 9 }, { 'id': 3, 'x': 5 }]
// console.log(join([{ 'id': 1, 'x': 2, 'y': 3 }, { 'id': 2, 'x': 3, 'y': 6 }], [{ 'id': 2, 'x': 10, 'y': 20 }, { 'id': 3, 'x': 0, 'y': 0 }])) // [{ 'id': 1, 'x': 2, 'y': 3 }, { 'id': 2, 'x': 10, 'y': 20 }, { 'id': 3, 'x': 0, 'y': 0 }]
// console.log(join([{ 'id': 1, 'b': {'b': 94},'v': [4, 3], 'y': 48 }], [ {'id': 1, 'b': {'c': 84}, 'v': [1, 3] }])) // [{ 'id': 1, 'b': {'c': 84}, 'v': [1, 3], 'y': 48 }]

// TODO LeetCode 2625 (Flatten Deeply Nested Array)
// const flat =  (arr, n) => {}
// console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0)) // [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)) // [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
// console.log(flat([[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// TODO LeetCode 2705 (Compact Object)
// const compactObject = (obj) => {}
// console.log(compactObject([null, 0, false, 1])) // [1]
// console.log(compactObject({ 'a': null, 'b': [false, 1] })) // { 'b': [1] }
// console.log(compactObject([null, 0, 5, [0], [false, 16]])) // [5, [], [16]]

// NOTES → Classes
// COMPLETE LeetCode 2694 (Event Emitter)
// class EventEmitter {
//   constructor() {
//     this.events = new Map()
//   }
//   subscribe(eventName, callback) {
//     if (!this.events.has(eventName)) {
//       this.events.set(eventName, [])
//     }
//     const listeners = this.events.get(eventName)
//     listeners.push(callback)
//     return {
//       unsubscribe: () => {
//         const index = listeners.indexOf(callback)
//         if (index !== -1) {
//           listeners.splice(index, 1)
//         }
//       }
//     }
//   }
//   emit(eventName, args = []) {
//     if (!this.events.has(eventName)) {
//       return []
//     }
//     const listeners = this.events.get(eventName)
//     const results = []
//     for (let listener of listeners) {
//       results.push(listener(...args))
//     }
//     return results
//   }
// }
// const emitter = new EventEmitter()
// console.log(emitter.emit('onClick')) // onClick has no cb's subscribed yet, returns []
// const cb1Sub = emitter.subscribe('onClick', cb1 = () => 99) // subscribes cb1 to onClick
// console.log(emitter.emit('onClick')) // onClick now has cb1 subscribed, returns [99]
// const cb2Sub = emitter.subscribe('onClick', cb2 = () => 'Hello!') // subscribes cb2 to onClick
// console.log(emitter.emit('onClick')) // onClick now has cb1 and cb2 subscribed, returns [99, 'Hello!']
// cb1Sub.unsubscribe() // unsubscribes cb1 from onClick
// console.log(emitter.emit('onClick')) // onClick now only as cb2 subscribed, returns ['Hello!']
// cb2Sub.unsubscribe() // unsubscribes cb2 from onClick
// console.log(emitter.emit('onClick')) // onClick has no cb's subscribed again, returns []

// COMPLETE LeetCode 2695 (Array Wrapper)
// class ArrayWrapper {
//   constructor(arr) {
//     this.arr = arr
//   }
// }
// ArrayWrapper.prototype.valueOf = function() {
//   return this.arr.reduce((prev, curr) => prev + curr, 0)
// }
// ArrayWrapper.prototype.toString = function() {
//   return `[${this.arr.join(',')}]`
// }
// const obj1 = new ArrayWrapper([1, 2])
// const obj2 = new ArrayWrapper([3, 4])
// console.log(obj1 + obj2) // 10
// console.log(String(obj1)) // '[1, 2]'
// console.log(String(obj2)) // '[3, 4]'

// COMPLETE LeetCode 2726 (Calculator with Mehtod Chaining)
// class Calculator {
// 	constructor(value) {
//     this.result = value
//   }
// }
// Calculator.prototype.add = function(value) {
//   return (this.result += value, this)
// }
// Calculator.prototype.subtract = function(value) {
//   return (this.result -= value, this)
// }
// Calculator.prototype.multiply = function(value) {
//   return (this.result *= value, this)
// }
// Calculator.prototype.divide = function(value) {
//   if (value === 0) throw new Error('Division by zero is not allowed')
//   return (this.result /= value, this)
// }
// Calculator.prototype.power = function(value) {
//   return (this.result = Math.pow(this.result, value), this)
// }
// Calculator.prototype.getResult = function() {
//   return this.result
// }
// console.log(new Calculator(10).add(5).subtract(7).getResult()) // 8
// console.log(new Calculator(2).multiply(5).power(2).getResult()) // 100
// console.log(new Calculator(20).divide(0).getResult()) // Error: Division by zero is not allowed
