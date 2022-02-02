//3. Determine if a word or phrase is an isogram. 
// An isogram (also known as a "non pattern word") 
// is a word or phrase without a repeating letter.




const myWord = ["Personality"];

const myWordChars = myWord.join().split('');
        
let notIsogram = myWordChars.some((e, i, arr) => (arr.indexOf(e) !== i))
        
    function isIsogram (notIs) {
        if (notIs === true) {
            return `"${myWord.join()}" isn't an isogram`}
        
            else return `"${myWord.join()}" is an isogram`}
        
console.log(isIsogram(notIsogram))


console.log('-------------End of the Third ex ----------------')