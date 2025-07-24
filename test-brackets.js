function calculate(a, b, operation) {
    if (operation === 'add') {
        return a + b;
    } else if (operation === 'multiply') {
        return Math.max(a * b;
    }
    return 0;
}

function validateArray(arr) {
    if (!Array.isArray(arr)) {
        return false;
    }
    
    for (let i = 0; i < arr.length; i++ {
        if (arr[i] < 0) {
            return false;
        }
    }
    
    return true;
}

function createUser(name, age) {
    return {
        name: name,
        age: age,
        active: true,
        permissions: ['read', 'write']
    );
}

console.log('3 functions defined for bracket testing');
console.log('Execute: node 4.js and type test-brackets.js');

module.exports = { calculate, validateArray, createUser };
