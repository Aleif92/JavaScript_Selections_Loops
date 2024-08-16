console.log("Hello World!\n==========\n");

// Exercise 1 Section
// 1. Create a `for` loop that evaluates numbers from 1 to 100.
// 2. Inside the loop body, write an `if/else` selection statement that checks whether a number is odd
// 3. If the number is odd, then print the number to the console, otherwise do nothing and continue to the next number
console.log("EXERCISE 1:\n==========\n");

for(let i =0; i < 100; i++){
    if(i % 2 == 0){
        continue;
    }
console.log(i);
}

// Exercise 2 Section
// FIZZBUZZ is a very common coding interview problem. Below are the instructions to solving the problem:

// 1. Create a `for` loop that evaluates numbers from 1 to 100 like the problem above.
// 2. Write a `if/else` selection statement inside the body of the the loop that checks the following:
//    - If the number is divisible by 3, then console.log `'FIZZ'`
//    - If the number is divisible by 5, then console.log `'BUZZ'`
//    - If the number is divisible by both 3 and 5, then console.log `'FIZZBUZZ'`
console.log("EXERCISE 2:\n==========\n");

for(let i = 0; i < 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(`${i} FIZZBUZZ`)
    }
    if(i % 3 == 0 ){
        console.log("FIZZ")
    }
    if(i % 5 == 0){
        console.log("Buzz")
    }
    else{
        console.log(`${i} is not divisible by 3 or 5`)
    }
   
}


console.log("EXERCISE 3:\n==========\n");


//For exercise 3, repeat both exercise 1 and 2 as `while` and `do/while` loop solutions.

let i = 1;

while(i<= 100){
    if(i % 2 !== 0){
        console.log(i);
    }
    i++
}
console.log(" STILL EXERCISE 3:\n==========\n");
i = 1;
do{
    if(i % 2 !== 0){
        console.log(i);
    }

    i++;
}while(i<=100);
i=1;
do {
    if(i % 3 == 0 && i % 5 == 0){
        console.log(`${i} FIZZBUZZ`)
    }
    if(i % 3 == 0 ){
        console.log("FIZZ")
    }
    if(i % 5 == 0){
        console.log("Buzz")
    }
    else{
        console.log(`${i} is not divisible by 3 or 5`)
    }
    i++;
}while(i<= 100)

//     ## Exercise 4: Find Value

// In this exercise, you will count from iterate from 1 to n. If you iterate over a given value, then break out the loop and print "Found value!". If you do not find the value in the given range, print "Did not find value".

// 1. Start with the following code:

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500


// 2. Create a `for` loop that iterates from 0 to n
// 3. If your current iteration is equal to `value`, then print "Found value!", and `break` out of the loop
// 4. If you do not ever find the value and break out of the loop, then after the loop is finished, print "Did not find value"

for(let i = 1; i <= n; i++){
    if(i == value){
        console.log(`Found ${value}`);
        break;

    }
    if (i == n){
        console.log(`Did not find ${value} within 1 -${n}`);
    }
    

}



