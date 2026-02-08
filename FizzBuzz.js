console.log("=== FizzBuzz Challenge ===");
console.log("Rules:");
console.log("- Print numbers 1 to 100");
console.log("- For multiples of 3, print 'Fizz'");
console.log("- For multiples of 5, print 'Buzz'");
console.log("- For multiples of both 3 and 5, print 'FizzBuzz'");
console.log("==========================\n");

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}