

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
  var i=0;
  
  function doWhileLoop(num){           
  function incrementVariabe(n){
  i= i+10;
  return i;
 }
   do {console.log("I run once regardless");
   }
   
   
   while (incrementVariabe() < i);
   }
   