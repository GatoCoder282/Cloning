function fizzbuzz(n) {
    if (typeof n !== 'number') {
        throw new Error('Input must be a number');
    }
    if (n % 15 === 0) {
        return 'FizzBuzz';
    } else if (n % 3 === 0) {
        return 'Fizz';
    } else if (n % 5 === 0) {
        return 'Buzz';
    } else {
        return n.toString();
    }
}

export default fizzbuzz;
