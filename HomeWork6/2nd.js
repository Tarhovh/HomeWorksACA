
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