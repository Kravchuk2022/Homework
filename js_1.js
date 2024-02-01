
//var result = 'number' + 3 + 3;    // 'number' - це рядок, 3,3 - це числа. Два разних типа данних відбувається конкатенація, т.к. є +.
//console.log(result);              // Тому результат number33

//var result = null + 3;            // null - це 0, 0+3=3
//console.log(result);  

//var result = 5 && "qwerty";       // 5 - це true, "qwerty" - true. && повертає останнє значення true. Тому виведе 'qwerty'
//console.log(result); 

//var result = +'40' + +'2' + "hillel";    // + перетворює '40' на число, 2 - так само, між ними +, 40+2=42 -це число, 
//console.log(result);                     // 'hillel' - рядок, відбувається конкатинація, т.к. є +. 42+hillel=42hillel

//var result = '10' - 5 === 6;              // '10'-перетворює на число щоб привести до одного типу данних, 10-5=5.
//console.log(result);                     // === строге рівенство, яке порівнює і тип данних і значення 5 не дорівнює 6, тому false

//var result = true + false;              // true - 1, false - 0. 1+0=1
//console.log(result);

//var result = '4px' - 3;                 // неможливо від '4px'- 3, різні типи данних не віднімаються, результат буде Nan
//console.log(result);

//var result = '4' - 3;                    // '4' - перетворює на число 4, щоб був один тип данних. 4-3=1
//console.log(result);

//var result = '6' + 3 ** 0;               // '6' - це рядок, 3**0=1 - це число, між ними + і відбувається конкатенація. 
//console.log(result);                    // Результат 61

//var result = 12 / '6';                  // '6' - на число. 12/6=2 
//console.log(result); 

//var result = '10' + (5 === 6);         // '10' - це рядок. 5 не дорівнює 6 - false. Між ними +, відбувається об'єднання.
//console.log(result);                  // Результат 10false

//var result = null == '';             // При нестрогому порівнянні, null не дорівнює пустому рядку. Результат false
//console.log(result); 

//var result = 3 ** (9 / 3);             // Перша дія виконується у скобках, 9/3=3. Друга дія 3 у степені 3 = 27
//console.log(result); 

//var result = !!'false' == !!'true';      // == не строге рівняння перевіряє значення, перетворює в інше булеве значення, false становиться true.
//console.log(result);                     // True перетворюється в true, тому результат true, тому що == порівнює значення

//var result = 0 || '0' && 1;             // не можно це рівняння почати спочатку розв'язувати, тому що 0-це число і буде true. || повертає перше true.
//console.log(result);                    // тоді рахуємо що 0 - це false. '0' && 1 - рахуємо це два true. && - повертає останнє значення true. Результат 1.

//var result = (+null == false) < 1;        // +null - це число, т.к. спочатку стоїть+, виходить 0. 0 - це false. == порівнює значення, false == false і це є true.
//console.log(result);                      // True перетворюємо в число і це буде 1. 1<1 - це не вірно. Результат false. 

//var result = false && true || true;        // && повертає перший false, || повертає true, тут true.
//console.log(result);   

//var result = false && (false || true);        //  Перша дія у скобках, || повертає перше true, тут true. && повертає перший false.  
//console.log(result);                          // Результат False

//var result = (+null == false) < 1 ** 5;;        //  Перша дія у скобках: + перед null перетворює null на число 0, false-це 0, ==порівнює значення 0=0-так, це True - і це 1.
//console.log(result);                           // 1 у степені 5 - це 1. 1<1 - false. Результат - false.