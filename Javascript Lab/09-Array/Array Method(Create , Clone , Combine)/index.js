  // --------------Lab1--------------------
        const a = [1, 5, 7, 11];
        const b = [2, 3, 6];
        const d = a.concat(b)
        // console.log(d);

        // --------------Lab2--------------------
        let arr1 = []
        function clone(arr){
            return arr1 = [...arr]
        }

        // --------------Lab3--------------------
        function first(arr,n){
            let arr2 
            if(n == undefined || n == 1){
                arr2 = arr.slice(0,1)
            }else{
                arr2 = arr.slice(0,n)
            }
             return arr2
        }
        let arr3 = [1,2,3,4,5,6]
        console.log(first(arr3,3));