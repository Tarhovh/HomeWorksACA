// 4. Write a function that accepts a string(a sentence) as a parameter and finds the longest word within the string․ If there are several words which are the longest ones, print the last word(words can be separated by space, comma or hyphen).

function findLongest(str){
    str = str.match(/[a-zA-Z0-9_-]+/gi).reverse()

    console.log(str)
    let longest = "";
      
    for(let i = 0; i < str.length; i++){
     
      if(str[i].length > longest.length === true) {
        longest = str[i]
       
      }
    }
    return longest;
  }

console.log(findLongest("A revolution with_out dancing is a revolution not worth having."))
console.log(findLongest("Which would be worse - to live as a monster, or to die as a good man"))
