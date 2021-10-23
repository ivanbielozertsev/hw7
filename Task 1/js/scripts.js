let numOrStr = prompt('Введите значение');

if (numOrStr === null || isNaN(numOrStr) || numOrStr.trim() === '') {
    console.log('Жаль, что морозитесь')  
    } else { 
        console.log('Ай, молодец!')  
    }