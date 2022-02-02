//4. Take a look at Lodash documentation and try to implement the following functions

    //1. _.intersection([arrays])
        // _.intersection([2, 1], [2, 3]); => [2]

        const myArr1 = [2, 1];
        const myArr2 = [2, 3];
        
        // Solution 1
        
        const same = myArr1.filter(val => myArr2.includes(val)).join()
        
        console.log(same)
        
        // Solution 2
        
        let joinArr = [...myArr1, ...myArr2]
        
        function dubl (arr) {
            
            for (i=0; i<arr.length; i++) 
        
            if (arr.sort()[i] === arr.sort()[i+1])
        
            console.log(arr[i])
        }
        
        dubl (joinArr)
        
        
        // 2. _.pull(array, [values])
                //var array = ['a', 'b', 'c', 'a', 'b', 'c'];
                //_.pull(array, 'a', 'c');
                //console.log(array); => ['b', 'b']
        
        const array = ['a', 'b', 'c', 'a', 'b', 'c']
        
        const filArr = []
        
        array.forEach((el) => {
            if (el !== 'a' && el !== 'c') {
                filArr.push(el)
            }
        })
        
        console.log(filArr)
        
        // 3. _.tail([1, 2, 3]);
                // => [2, 3]
        
        const myArr4 = [1, 2, 3]
        
        const slicedArr = myArr4.slice(1)
        
        console.log(slicedArr)
        
        //4. _.take(array, [n=1])
           // Creates a slice of array with n elements taken from the beginning.
        
        const newSlicedArr = myArr4.slice(0, 1)
        console.log(newSlicedArr)