let set = [4,0,8,1,10]


function sort(set) {
    let initialValue
    for (let i = 0; i < set.length; i++) {
         initialValue = set[i]
            j = i - 1; 
      
            while (j >= 0 && set[j] > initialValue)
            { 
                set[j + 1] = set[j]; 
                j = j - 1; 
            } 
            set[j + 1] = initialValue; 
            
       
        
    }
   return set
     
}

console.log(sort(set));