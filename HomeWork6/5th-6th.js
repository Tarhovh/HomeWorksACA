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

//// աշխատանքային տարբերակ

// function flatten (array, help) {

//     let arr = [];
    
//     help (array, 0)
    
//     function help (array, i){
    
//         if (i === array.length) 
//     {
//         return array
//     }

//     else if (i <= array.length) {

//         array[i] = array[i+1]
        
//         help(array, i+1);

//         let element = array[i];
        
//         if (Array.isArray(element)) {
//                return help(element)
//             } else 
//             {
//             arr.push(element, i+1);
//             }
        
//         }
        
//     }
//     return arr;
// }
    
// console.log(flatten(nested1))
// console.log(flatten(nested2))


                console.log('------end of 5th ----')

// 6th. 



// 7th.

const number1 = 14;
const number2 = 29;
const number3 = 999999999999;

function sum (num) {

    num = num.toString().split("")

    for (i=0; i<num.length; i++) {

        if ((+num[i] + +num[i+1]) < 10) {

              return num = +num[i] + +num[i+1];}

        else if ((+num[i] + +num[i+1]) > 10) {
                
            num = +num[i] + +num[i+1];

            return sum(num)
        };

    }
}

console.log(sum(number1))
console.log(sum(number2))
console.log(sum(number3))

console.log('------end of 7th ----')

// 8th Deep clone OBJ with recursive function

const myCompany = {
    head: "Poghos",
    deputyHead: "Petros",
    budjet: "$15000000",
    subBudjet: {
        sallery: "10000000",
        other: "5000000",
    },
    personal: "280",
}

let myClone = {}


// function ObjClone(myOBJ) {

//     for (let key in myOBJ) {
//         if (myOBJ.hasOwnProperty(key)) {
//         myClone[key] = myOBJ[key];

//         // myClone.head = 'Pilipos';
//         // ((myClone || {}).subBudjet || {}).sallery = "$9000000";
//         // ((myClone || {}).subBudjet || {}).other = "$6000000"
//        }
      
//       }
//       return myClone
      
// }

// console.log(ObjClone(myCompany))


console.log(ObjClone(myCompany))

/////////////////////////////////////////////////


function ObjClone(myOBJ, newObj) {

    

    let myEntries = Object.keys(myOBJ)

    let mybla = Object.values(myOBJ)

    let myClone = {}

    newObj(myEntries, myClone, 0, 0)
    
    function newObj (myEntries, myClone, ke, value) {

        if (ke === mybla.length && value ===myEntries.length) {
          
            return myClone
        }

        else if (ke < mybla.length && value < myEntries.length) {

            myClone[value] = mybla[value]

            return newObj (myEntries, myClone, ke+1, value+1)
        }
       
    } 
      return myClone;
}

console.log(ObjClone(myCompany))

