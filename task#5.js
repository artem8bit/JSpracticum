const validatePIN =(pin)=>
        pin 
        typeof pin === 'string' && !isNaN(pin) && (pin.length === 4 || pin.length === 6);

console.log(validatePIN('0000'))