// Step 1
let age: number = 25;

// Step 2
console.log("Step 2")
for (let i = 1; i <=age; i++) {
    console.log(i)
}

// Step 3
console.log("Step 3")
if (age > 18){
    console.log("Age is greater than 18.")
} else {
    console.log("Age is less than or equal to 18.");
}

// Step 4
let score: number = 0;

// Step 5
if (score !== 1) {
    console.log("Score is available.");
}

if (score !== 0) {
    console.log("Score is available.");
}

// Step 6
if (score) {
    console.log("Score is evaluated as truthy.");
} else {
    console.log("Score is evaluated as falsy");
}

// Step 7
let username: string = '';

// Step 8
if (username) {
    console.log("Username is available.")
}

// Step 9
if (!username) {
    console.log("Username is evaluated as falsy");
} else {
    console.log("Username is available");
}

// Step 10
let isAdmin: boolean = false;

// Step 11
if (isAdmin) {
    console.log("isAdmin is evaluated as truthy.");
} else {
    console.log("isAdmin is evaluated as falsy.")
}

// Step 12
if (!isAdmin) {
    console.log("isAdmin is false.");
}

// // Bonus
// function christmasTree(n: number): void {
//     for (let i = 1; i <= n; i++) {
//         let spaces = ' '.repeat(n - 1);
//         let stars = '*'.repeat(2 * i - 1);
//         console.log(spaces + stars)
//     }
//
//     for (let i = 1; i <= n; i++) {
//         console.log(' '.repeat(n - 1) + '*');
//     }
// }
//
// christmasTree(5);

function printChristmasTree(n: number): void {
    // Top part of the tree
    for (let i = 1; i <= n; i++) {
        const stars = '*'.repeat(2 * i - 1);
        console.log(stars.padStart((2 * n - 1) / 2));
    }

    // Trunk
    for (let i = 0; i < 3; i++) {
        const trunk = '*'.padStart((2 * n - 1) / 2);
        console.log(trunk);
    }
}

// Example usage:
const treeHeight = 5;
printChristmasTree(treeHeight);