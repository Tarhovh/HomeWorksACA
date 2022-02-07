/*
► Ex 7 Done!
► Ex 8 Done!

*/

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

console.log('↓ Original')
console.log(myCompany)


console.log('↓‼ recurcive clone')

function ObjClone2(myOBJ, newObj) {

    let myEntries = [myOBJ]
    let myOBJ2 = {}
    let myClone = {}

    newObj(myEntries, myClone, 0, 0)
    
    function newObj (myEntries, myOBJ2, value) {

        if (value===myEntries.length) {
          
            return myOBJ2
        }

        else if (value < myEntries.length) {

            myOBJ2[value] = myEntries[value]
            myClone = myOBJ2[0]
            myClone.head = 'Panos';

            return newObj (myEntries, myOBJ2, value+1)
        }
    }; return myClone;
}

console.log(ObjClone2(myCompany))


console.log('↓ non recursive Clone')

function ObjClone(myOBJ) {

    for (let key in myOBJ) {
        if (myOBJ.hasOwnProperty(key)) {
        myClone[key] = myOBJ[key];

        myClone.head = 'Pilipos';
        // ((myClone || {}).subBudjet || {}).sallery = "$9000000";
        // ((myClone || {}).subBudjet || {}).other = "$6000000"
       }
      
      }
      return myClone
      
}

console.log(ObjClone(myCompany))

console.log('------end of 8th ----')