// 3. Find index of number where sorting order is violeted

const sortedArr1 = [2, 12, 15, 48, 64];
const sortedArr2 = [-9, -4, -4, 3, 12, 4, 5];


function fin (array) {    

    // debugger
    for (i=0; i<array.length; ++i) {

        if (array[i] > array[i+1]) {

            return i+1;
            // if (i+1 !== undefined) {
            // return i+1}  
        }

        else if (array[i] < array[i+1]) 
            { i++ }

        else return -1
    }
}

console.log(fin(sortedArr1))
console.log(fin(sortedArr2))


                console.log('-----End of 3rd----')

// 4th ► with rec. func. shift (no method) first and return other part

const removeArr1 = [6, 78, 'n', 0, 1];
const removeArr2 = [5]
const removeArr3 = []

function shift (array, change) {

change (array, 0)

if (array.length) 
    {
        array.length = array.length-1
    }
  
function change (array, i) {

    if (i === array.length) 
    {
        return array
    }

    else if (i <= array.length)

        array[i] = array[i+1]
        
        change(array, i+1)
       
}; return array

};

console.log(shift(removeArr1));
console.log(shift(removeArr2));
console.log(shift(removeArr3));


                console.log('-----End of 4th----')