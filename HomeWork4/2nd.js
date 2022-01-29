//2. Write a function which receives two strings and removes appearances of the second string from the first one.

// function removeRepeated(str1, str2) {
   
//     if (str1.indexOf(str2) !== -1)

//     {
//         let regex = new RegExp(str2, 'g')
//         return str1 = str1.replace(regex, "")
//     }
//         else return 'no'
//     }

//     console.log(removeRepeated("This is some text.", 'is'))
//     console.log(removeRepeated("Yes, London. You know: fish, chips, cup ‘o tea, bad food, worse weather", "o"))



// Other method, without regex


// function removeRepeated(str1, str2) {
   
//     if (str1.indexOf(str2) !== -1)

//     {
//         return str1 = str1.replaceAll(str2, "")
//     }
//         else return 'no'
//     }

//     console.log(removeRepeated("This is some text.", 'is'))
//     console.log(removeRepeated("Yes, London. You know: fish, chips, cup ‘o tea, bad food, worse weather", "o"))