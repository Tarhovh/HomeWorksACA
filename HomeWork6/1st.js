//1 . Write a recursive func to find whether all digits are odd

const number = '4211133'

const arrayNum = number.split("")

const num2 = '7791'

const arrayNum1 = num2.split("")

const num3 = '5'

const arrayNum2 = num3.split("")

function findOdd (arr, index) {

    for (i=0; i<arr.length; i++) {
        
        if (arr[i] % 2 === 0)

        return false
    }

    return true
}

console.log(findOdd(arrayNum))
console.log(findOdd(arrayNum1))
console.log(findOdd(arrayNum2))

console.log ('----- End of 1st ------')