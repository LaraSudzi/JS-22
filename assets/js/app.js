
    

function calc (){

      let mass = +massInput.value; 
      let height = +heightInput.value; 
        
      let index = mass / (height * height);

      index = index * 100;

      index = Math.round (index);

   

      

    if(index <= 16) {
        Diagnosis.innerHTML =('выраженный дефицит массы тела.');
    }

    if(index  > 16 && index <= 18.5) {
       Diagnosis.innerHTML =('недостаточная (дефицит) массы тела.');
    }
    
    if(index  > 18 && index <= 25) {
       Diagnosis.innerHTML =(',норма.');
    }
    
    
    if(index  > 25 && index <= 30) {
        Diagnosis.innerHTML =(',избыточная масса тела (предожирнеи)');
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

 






