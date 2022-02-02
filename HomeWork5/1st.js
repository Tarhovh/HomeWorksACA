// 1. Implement following array methods:

// Concat

const myArr = [1, 2];
const myArr0 = [3, 4];
const myArr3 = ['a', 'b']

const concatedArr = myArr.concat(myArr0)

    console.log(concatedArr)

const newConcatedArr = myArr.concat(myArr0, myArr3)

    console.log(newConcatedArr)

// Fill 

const filledArr = concatedArr.fill(2, 3, 4)

    console.log (filledArr)

const filledArr2 = newConcatedArr.fill(5, 5, 6)

    console.log(filledArr2)

console.log (Array(8).fill(5))

// Find

const arr10 = ['a', 'b', 'g', , 2, ,];

arr10.find((value, index) => {

    if (value === undefined) 
    console.log('index ', index, ' value ', '"no value"')

    else
  console.log('index ', index, ' value ', value);
});

const findArr = concatedArr.find((value) => value > 2)

console.log(findArr)

// FindIndex

function notPrime (number) {
    for (let i=2; number > i; i++) {
        if (number % 2 !== 0) 
        return false
    }

    return number > 1
}

console.log([3, 5, 7, 8].findIndex(notPrime))

const cars = ['BMW', 'Cadillac', 'Ford', 'Dodge', 'Mercedes']


const findCar = cars.findIndex((car, index) => {
 if (car === 'Dodge')

 console.log('index ', index, ' car ', `'${car}'`)
})


// Flat

let arr5 = ['Math', 'History', 'Geography', ['Other', ['Other2', ['Math']]]]

flatedArr = arr5.flat(Infinity)

console.log(flatedArr)


// Map

const arrForMap = [1, 5, 6, 10]

const myMap = arrForMap.map(element => element * 5)

console.log(myMap)

const objArray = [
    {id: 1, val: 3},
    {id: 2, val: 5},
    {id: 3, val: 7}
]

const formatedObjArr = objArray.map(obj => {
    let formObj = {}

    formObj[obj.id] = obj.val;

    return formObj
})

console.log(formatedObjArr)


// reduce

const reduceArr = [3, 5, 7, 9, 14]

function reducer(previous, current) {

    const reduced = previous + current;

    console.log(`previous ► ${previous} || current ► ${current}`)

    return reduced;
}

console.log(reduceArr.reduce(reducer))


console.log('-------------End of the First ex ----------------')