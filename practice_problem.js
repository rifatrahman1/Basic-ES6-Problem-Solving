
// problem-1

const multiply = (num1, num2, num3) => {
    const numbers = num1 * num2 * num3;
    return numbers;
}

// console.log(multiply (2, 2, 2));

// problem-2

const three_line = `
I am a web developer
I love to code
I love to eat briyani
`
// console.log(three_line);

// problem-3

const sum = (number1, number2 = 30) => {
    const sum = number1 + number2;
    return sum;
}

// console.log(sum (30));

// problem-4

const friends = ['rifat', 'nafiz', 'rahmatullah', 'sany', 'fahim', 'sabbir', 'tanjil'];
const push = [];

const even_charecter = () => {
    for (const friend of friends) {
        if (friend.length % 2 === 0) {
            push.push(friend)
        }
    }
    return push;
}

console.log(even_charecter());


// problem-5

const numbers = [12, 2, 14, 5, 21, 15, 9]

const average = () => {
    let sum = 0;
    for (const number of numbers) {
        const square = number ** 2;
        sum = square + sum;

    }
    const average = sum / numbers.length;
    return Number(average.toFixed(2));
};

console.log(average());

// problem-6

const number1 = [23, 34, 54, 76, 56];
const number2 = [87, 35, 78, 12, 38];

const to_dimenstional = () => {

    const number3 = [...number1, ...number2]
    console.log(number3)
    const max_number = Math.max(...number3);
    console.log(max_number);
};
to_dimenstional()