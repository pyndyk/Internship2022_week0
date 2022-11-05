const myArray = [1, 10, 3, 6, 'ArrayElement'];

/**
 * 1. Log 3 and 6 elements from myArray to console
 * Please, use more than on solution
 */

console.log(`3: ${myArray[2]}`);
console.log(`6: ${myArray[3]}`);
console.log(`3: ${myArray.at(2)}`);
console.log(`3: ${myArray.at(3)}`);


/**
 *  2. Log type of each element
 */

myArray.forEach(items => {
    console.log(typeof items);
});


/**
 *  3. Check if all elements in array is Number
 *  Should return Boolean
 */

const isNumber = myArray.every(function(element, index, myArray) {
    return typeof element === 'number'
});

console.log({
    isNumber,
});

/**
 * 4. Check if at least one element is bigger than 5
 * Should return Boolean
 */

const isBiggerThanFive = myArray.some(function(element, index, myArray) {
    return element > 5
})

console.log({
    isBiggerThanFive,
});

/**
 * 5. Create another variable that will include only elements that bigger than 5
 * Should return another Array
 */

const elementsBiggerThanFive = myArray.filter(item => item > 5);

console.log({
    elementsBiggerThanFive,
});

/**
 * 6. Multiply numbers of Array by 2
 * Should return another Array
 */

const multiplied = myArray.map(function(item) {
    if (typeof item == 'number') return item * 2
    else return item
})
console.log({
    multiplied,
});

/**
 * 7. Calculate array sum
 */

const sum = myArray.reduce(function(sum, element) {
    if (typeof element == 'number') return sum + element
    else return sum
}, 0);

console.log({
    sum,
});

/**
 * 8. Sort array in ascending and descending order
 */

const asc = myArray.slice(0).sort(function(a, b) { return a - b });
const desc = myArray.slice(0).sort(function(a, b) { return a - b }).reverse()

console.log({
    asc,
    desc,
});