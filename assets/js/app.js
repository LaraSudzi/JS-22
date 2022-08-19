
    
  function action(){

  let mass = +massInput.value;
  let height = +heightInput.value;
  
  if(height > 3){
      height = height / 100;  
  }
  
  let index = mass / (height ** 2);
  index = Math.round(index * 10)/10;


     if(index <= 16) {
         Diagnosis.innerHTML = ('выраженный дефицит массы тела');
    }

    if(index  > 18 && index <= 25) {
      Diagnosis.innerHTML =('норма.');
    }
    
    
    if(index  > 25 && index <= 30) {
       Diagnosis.innerHTML =('избыточная масса тела (предожирнеи)');
    } 

    if(index  > 30 && index <= 35) {
      Diagnosis.innerHTML =('Ожирение 1 степени.');
   }  
   
   if(index  > 35 && index <= 40) {
       Diagnosis.innerHTML =('Ожирение 2 степени.');
   } 
   
   if(index  > 40 ) {
     Diagnosis.innerHTML = ('Ожирение 3 степени.');
   }  

    resultPlace.innerHTML = index;

  
     
    } 

 






