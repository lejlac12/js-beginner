const output = oneExample(false);
console.log(output);

function oneExample(input) {
    if (typeof input !== 'number')
        return NaN;

    if ((input % 3 === 0) && (input % 5 === 0))
        return 'oneExample';

    if (input % 3 === 0)
        return 'one';

    if (input % 5 === 0)
        return 'Example';

    return input;
}