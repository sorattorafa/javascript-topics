const array = [32,20,0,1,10];

const existNumber = array.filter(element => {
    const filter = 10;
    return checkNumber(element, filter);
})

const {
    length: numberOccurrences,
} = existNumber;

console.log({
    number_of_occurrences: numberOccurrences,
    elements: existNumber,
});

function checkNumber(number, filter) {
    return number === filter;
}
