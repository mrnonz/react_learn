console.log("Hello, React!")

import area, {add, decrease} from './math'

console.log(add(2, 4))
console.log(decrease(99))

const numbers = [1, 2, 3, 4, 5]
const x2 = numbers.map(number => (number * 2))

console.log(x2)
