const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your captcha: ", (answer) => {
    rl.question("Choose your part (1 / 2): ", (part) => {
        if (+part === 1) {
            console.log(calculateCaptchaPart1(answer));
        } else if (+part === 2) {
            console.log(calculateCaptchaPart2(answer));
        } else {
            console.log(`Couldn't find part ${part}`);
        }

        rl.close();
    })
});

function calculateCaptchaPart1(answer) {
    let sum = 0, last;

    for (var i in answer) {
        const n = +answer[i];

        if (i === (answer.length - 1)) {
            if (n === +answer[0]) {
                sum += n;
            }
        }

        if (n === last) {
            sum += n;
        }

        last = n;
    }

    return sum;
}

function calculateCaptchaPart2(answer) {
    const look = +(answer.length / 2);
    let sum = 0;

    for (var i in answer) {
        const n = +answer[i];
        let check;

        //If we're over halfway, we reverse the lookup
        if (answer[+i + look] === undefined) {
            check = +answer[+i - look];
        } else {
            check = +answer[+i + look];
        }

        if (n === check) {
            sum += n;
        }
    }

    return sum;
}