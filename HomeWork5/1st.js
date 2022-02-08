// 1. Implement following array methods:

// Concat

console. log ('----- Concat start----')

const myArr = [1, 2];
const myArr0 = [3, 4];
const myArr3 = ['a', 'b', [2]]

function concat (...arrays) {
    let newarr = [];

    for (i=0; i<arrays.length; i++) {
        newarr.push(...arrays[i])
    }; 
    return newarr
}

console.log(concat(myArr, myArr0, myArr3))

// Fill 
console. log ('----- Fill start----')

const fillArr = [0,3,5,6,7]

function fill (array, n, startIndex, endIndex) {

    for (let i=0; i<array.length; i++) {

        if (i>=startIndex) {

            if (endIndex !== undefined && i<=endIndex) {
           array[i] = n;}

           else if (endIndex === undefined) {
               array[i] = n;
           }
        }

        else if (startIndex === undefined) {
            array[i] = n
        }

    } return array

}

// console.log(fill(fillArr, 4))
// console.log(fill(fillArr, 4, 1))
console.log(fill(fillArr, 4,1,3))


// Find
console. log ('----- Find start----')

const arr10 = ['a', 'b', 'g', 'a', 'Hello',];
const inventory = [
    {name: 'apples', quantity: 9},
    {name: 'bananas', quantity: 8},
    {name: 'cherries', quantity: 10}
  ];

function find (object, value) {
    
    let status = `-1: No '${value}'`;

    if (Array.isArray) {

        for (i=0; i<object.length; i++) {

            if (object[i] == value) {
                status = `'${object[i]}' found` ;
                    break;
            }

            else if (object[i].name == value) {
                status = `'${object[i].name}' found`;
                break;
            }

            else if (object[i].quantity === value) {
                status = `'${object[i].quantity}' found`;
                break;
            }
        }
     }

    return status
}

console.log(find(arr10, 'Hello'))
console.log(find(inventory, 'bananas'))

// FindIndex
console. log ('----- FindIndex start----')

let arr11 = [1, 2, 6, 9, 15, 4]

function findIndex (object, value) {

    let status = `-1 `;

    if (Array.isArray) {

        for (i=0; i < object.length; i++) {

            if (object[i] < value) {
                status = `'${object[i]}' at Index '${i}' is smaller than '${value}'` ;
                    break;
            }

            else if (object[i].quantity < value) {
                status = `'${object[i].quantity}' at Index '${i}' is smaller than '${value}'` ;
                break;
            }
        }
     }

    return status
}

console.log(findIndex(arr11, 10))
console.log(findIndex(inventory, 10))

// Flat
console. log ('----- flat start----')

let arr5 = ['Math', 'History', 'Geography', ['Other', ['Other2', ['Math']]]]

function flat (array) {

    let arr = [];
    
    function help (array) {
    
        for (let i=0; i<array.length; i++) 
        {
            let element = array[i];
        
            if (Array.isArray(element)) {
                help(element);
            } else 
            {
            arr.push(element);
            }
        }
    }
    
    help(array);
    
    return arr;
}

console.log(flat(arr5))

// Map
console. log ('----- Map start----')

const arrForMap = [1, 5, 6, 10]

function map (array) {

    for (i=0; i<array.length; i++) {
       array[i] *= 5
    }
   return array
}

console.log(map(arrForMap))

const objArray = [
    {id: 1, val: 3},
    {id: 2, val: 5},
    {id: 3, val: 7}
]

function myMap (object) {

    let formObject = {}

    for (i=0; i < object.length; i++) {

        formObject[object[i].val] = object[i].val

    }
    return formObject
}

console.log(myMap(objArray))

// reduce
console. log ('----- Reduce start----')

const reduceArr = [3, 5, 7, 9, 14]

function reduce (array) {
    let value = 0;

    for (let i = 0; i < array.length; i++) {
        value += array[i]
    }

    return value
}

console.log(reduce(reduceArr))


console.log('-------------End of the First ex ----------------')