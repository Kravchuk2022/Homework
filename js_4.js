function myIsNaN(value) {
    return value !== value || typeof value !== 'number';
}
console.log(myIsNaN(NaN)); 
console.log(myIsNaN('abc')); 
console.log(myIsNaN(undefined)); 
console.log(myIsNaN(null)); 
console.log(myIsNaN(true)); 
console.log(myIsNaN(0 / 0));
console.log(myIsNaN({}));
console.log(myIsNaN('123'));
console.log(myIsNaN('37.37')); 
console.log(myIsNaN("")); 
console.log(myIsNaN(" ")); 
console.log(myIsNaN(123));

function pad(str, char, count, isStart) {
    if (typeof str !== 'string' || typeof char !== 'string' || typeof count !== 'number' || typeof isStart !== 'boolean') {
        return "Invalid arguments"; 
    }

    if (count <= str.length) {
        return str; 
    }

    const diff = count - str.length; 

    if (isStart) {
        return char.repeat(diff) + str; 
    } else {
        return str + char.repeat(diff); 
    }
}
console.log(pad('qwerty', '+', 10, true)); 
console.log(pad('qwerty', '+', 10, false)); 
console.log(pad('qwerty', '+', 5, true)); 
console.log(pad('qwerty', '+', 5, false)); 

function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++; 
        }
    }
    console.log("Кількість згенерованих чисел:", count);
    console.log("Парних чисел:", evenCount);
    console.log("Не парних чисел:", oddCount);

    const evenPercentage = (evenCount / count) * 100;
    const oddPercentage = (oddCount / count) * 100;
    console.log("Відсоток парних до не парних:", evenPercentage.toFixed(2) + "% : " + oddPercentage.toFixed(2) + "%");
}
checkProbabilityTheory(1000); 
