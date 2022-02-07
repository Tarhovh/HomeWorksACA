/*
► Ex 5 Done!
► Ex 6 Done!
*/

// 5th. Flatten nested array with recursion

const nested1 = [1, [3, 4, [1,2]], 10];
const nested2 = [14, [1, [[[3,[]]]], 1], 0];

function flatten (array) {

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
    
console.log(flatten(nested1))
console.log(flatten(nested2))


                console.log('------end of 5th ----')

// 6th. Rec function that rotates an Arr 
//      N places to left (use arr.unshift())

//['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] 3 ► ['d', 'e', 'f', 'g', 'h', 'a', 'b', 'c']
//['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] -2 ► ['g', 'h', 'a', 'b', 'c', 'd', 'e', 'f']

const rotateArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

function rotateLeft (a, n) {

    if (n===a.length) return a;

    else if (n<a.length) {
        
        a.unshift(a.pop(n))

        rotateLeft(a, n+1)

    }; return a;
};

 console.log(rotateLeft(rotateArr, 3))
//  console.log(rotateLeft(rotateArr, -2)) 

             console.log('------end of 6th ----')