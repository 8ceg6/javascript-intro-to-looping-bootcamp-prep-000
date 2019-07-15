

function forLoop(array){
          for (let i= 0; i< 25; i++){ 
              if (i===1) {
          
                array.push('I am 1 strange loop.')}
                 
                else {array.push('I am 24 strange loops.')} 
  
}
  return array;
  }
  function whileLoop(array){
  
          while (array > 0) {
          console.log (--array);
    }
          return 'done';
  }
  var n=0;
  
  function doWhileLoop(num){           
  
  function incrementVariabe(n){
            n= n+1;
            return n;
 }
   do {console.log("I run once regardless");
   }
   
   
   while (incrementVariabe() < n);
   }
   console.log (incrementVariabe(10))
   
   
   
   
   
   