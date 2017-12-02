function calculateChecksumPart1(input) {
    const rows = input.split(" ");
    let checksum = 0;

    for (let row of rows) {
        const columns = row.split("\t");
        let minChecksum = 0, maxChecksum = 0;

        for (let column of columns) {
            if (minChecksum === 0) {
                minChecksum = column;
            } else {
                minChecksum = Math.min(minChecksum, column);
            }

            if (maxChecksum === 0) {
                maxChecksum = column;
            } else {
                maxChecksum = Math.max(maxChecksum, column);
            }
        }

        checksum += (maxChecksum - minChecksum);
    }

    console.log(`Checksum is: ${checksum}`);
}

function calculateChecksumPart2(input) {
    const rows = input.split(" ");
    let checksum = 0;

    for (const row of rows) {
        const columns = row.split("\t");

        for (const column of columns) {
            const number = parseInt(column);

            const result = columns
                .map(x => number / parseInt(x))
                .filter(x => Math.round(x) === x)
                .reduce((x, y) => Math.max(x, y));
            
            if (result === 1) {
                continue;
            }

            checksum += result;
        }
    }

    console.log(`Checksum is: ${checksum}`);
}