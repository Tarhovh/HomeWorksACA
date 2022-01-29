//3. Given a sentence with missing words and an array of words. Replace all ‘_’ in a sentence with the words from the array.


// function addMissingWord (str, arr) {
            
//                 for (let i=0; i<arr.length; i++) {

//                     let j=0; j<arr[i].length; j++
                                   
//                    str = str.replace('_', arr[i]).replace('_', arr[j]).replace('_', arr[j+1])

                
//                     return str
//                 }
// }

// console.log(addMissingWord("_, we have a _", ["Houston", "problem"]))
// console.log(addMissingWord("If at _ you don’t _, try, try _.",

//     ["first", "succeed", "again"]))

   
   // --------------------------------------------------------
   
//     function addMissingWord (str, arr) {
            
//                 for (let i=0; i<arr.length; i++) {

//                    for (let j=0; j<arr[i].length; j++)
                   
//                    str = str.replace(/[_]/g, (m => m === '_' ? arr[i] : arr[i+1]));

//                     return str
//                 }
// }
// // ,(m => m === 'T' ? '' : ' '));

// console.log(addMissingWord("_, we have a _", ["Houston", "problem"]))
// console.log(addMissingWord("If at _ you don’t _, try, try _.",

// ["first", "succeed", "again"]))


// function replaceBulk(str, replaceArray){
//     var i, regex = [], map = {}; 
//     for( i=0; i<replaceArray.length; i++ ){ 
//       regex.push(replaceArray[i].replace(/([-[\]{}()*+?.\\^$|#,])/g,'\\$1') );
//       console.log(regex)
//       map[replaceArray[i]] = replaceArray[i+1]; 
//     }
//     regex = regex.join('|');
//     str = str.replace( new RegExp( regex, 'g' ), function(matched){
//       return map[matched];
//     });
//     return str;
//   }
  
//   // Test:
// //   console.log( replaceBulk( "tar pit", ['tar','pit'], ['capitol','house'] ) );
//   console.log( replaceBulk( "you & me", ['me','you'] ) );