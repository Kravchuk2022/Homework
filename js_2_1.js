
var prompt = require('prompt');

prompt.start();

prompt.get(['value'], function (err, result) {
    let input = result.value;
    let [amount, unit] = input.split(' ');
    amount = parseFloat(amount);
    switch (unit) {
      case 'км':
        console.log(amount + ' км это ' + (amount * 1000) + ' м.');
        break;
      case 'год':
        console.log(amount + ' год это ' + (amount * 60) + ' мин.');
        break;
      case 'кг':
        console.log(amount + ' кг это ' + (amount * 1000) + ' г.');
        break;
      default:
        console.log('Неизвестная единица измерения.');
    }
  });
