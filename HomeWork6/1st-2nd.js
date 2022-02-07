/*
► Ex 1 Done!
► Ex 2 Done!
*/

//1 . Write a recursive func to find whether all digits are odd

const number = '4211133'
const num2 = '7791'
const num3 = '5'

function odd (num, arrNum) {

    const numArr = num.split("");

    arrNum(numArr, 0)

    function arrNum (numArr, i) {

     if (i <= numArr.length)

            if (numArr[i] % 2 === 0)
            { 
                return false
            }

            else return true;
        
        change(numArr, i+1)
       
}; return arrNum(numArr, 0)

}

console.log(odd(number))
console.log(odd(num2))
console.log(odd(num3))


console.log ('----- End of 1st ------')

// 2nd: With recursive function find minimal positive element

const numArr = [56, -9, -87, -23, -5, 0, -105, 55, 1]
const numArr2 = [45, -9, 15, 5, -78]
const numArr3 = [-5, -9, -111, -1000, -7]

function findSmallest(array, smallest){

	if (array.length <= 0) 
        {

            if (smallest !== undefined)
                return smallest;

            else return -1;
        }

	else 
        {
            let first = array.shift();

            if ((first < smallest || smallest === undefined) && first >=0)
                {
                    smallest = first;
                }

        return findSmallest(array, smallest);
        }
} 

console.log(findSmallest(numArr));
console.log(findSmallest(numArr2));
console.log(findSmallest(numArr3));

console.log ('----- End of 2nd ------')