
    alert ('Demo');

        function calc (){
            alert ('calc() Function');
        }

 let mass = +prompt ('Ваш вес в кг');

 console.log (`Масса тела: ${mass}`);

 let h = +prompt ('Ваш рост в см');

 h = h / 100;

 console.log (`Рост в метрах: ${h}`);
        
 let index = mass / (h * h);

index = index * 100;

index = Math.round (index);

index = index / 100;

console.log (`индекс: ${index}`);






