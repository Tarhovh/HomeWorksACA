//2. Given an array. Determine whether it consists only of unique items or not.


let arr3 = ['Math', 'History', 'Geography', 'sosiology', ['Other', ['Other', ['Math']]]]

arr3 = arr3.flat(Infinity)


/// Solution 1


let isUnique = arr3.map( (element, index, arr) => {

    if (arr.indexOf(element) === index) 
    return 

    else return 'Has duplicate elements'

})

function unique (isUnique) {
if (isUnique.includes('Has duplicate elements')) {
    return 'Has duplicate elements'
}

else return 'All elements are unique'}

console.log(unique(isUnique))


/// Solution 2

 
let s1 = arr3.some((e, i, arr) => (arr.indexOf(e) !== i))

function isUn (s) {
    if (s === true) {
        return 'Has duplicate elements'}

    else return 'All elements are unique'}

console.log(isUn(s1))


// Solution 3

function dubl(arr3) {
  for (let i = 0; i < arr3.length; i++) {
    if ((arr3[i]) === (arr3[i+1])) {
      return 'Has duplicate elements'
    }
  }
  return 'All elements are unique'
}

console.log(dubl(arr3.sort()))


console.log('-------------End of the Second ex ----------------')