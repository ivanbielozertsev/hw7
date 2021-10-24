let numOrStr = prompt('input number or string');
console.log(numOrStr)
switch (numOrStr) {
    case null:
      console.log('вы отменили');
      break;
    case !isNaN(numOrStr) || numOrStr:
      console.log(' number is Ba_NaN');
      break;
    case !(numOrStr.trim() === '') || numOrStr:
      console.log('Empty String');
      break;
    default:
      console.log('OK!');
      break;
  }