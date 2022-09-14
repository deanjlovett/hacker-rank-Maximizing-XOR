'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'maximizingXor' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER l
 *  2. INTEGER r
 */

function maximizingXor(l, r) {
    // Write your code here
  
    // my solution, first pass: 
    // brute force. roll through almost all possible values
    // potential way to turn this from O(x^2) to O(x):
    // find binary rep with '10x' furtherest to the left that is <= r && >= l
    // find binary rep with '01x' furtherest to the left that is <= r && >= l
  
    let max = 0;
    for( let i=l; i<r; ++i){
        for( let j=l+1; j<=r; ++j){
            let t = i^j;
            if( t>max) {
                max = t;
            }
        }
    }
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const l = parseInt(readLine().trim(), 10);

    const r = parseInt(readLine().trim(), 10);

    const result = maximizingXor(l, r);

    ws.write(result + '\n');

    ws.end();
}
