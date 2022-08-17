
    

function calc (){
      let mass = +massInput.value; 
      let height = +heightInput.value; 
        
      let index = mass / (h * h);

      index = Math.round (index);

      if(index <= 16) {
        alert(`Ваш индекс: ${index},выраженный дефицит массы тела.`);
        console.log('выраженный дефицит массы тела.');
    }
         resultPlace.innerHTML = index;
    } 

 






