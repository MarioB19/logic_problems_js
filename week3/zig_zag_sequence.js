function findZigZagSequence(a, n) {
    a.sort((x, y) => x - y);
    let mid = Math.floor((n + 1)/2) - 1;
    let temp = a[mid];
    a[mid] = a[n - 1];
    a[n - 1] = temp;

    let st = mid + 1;
    let ed = n - 2;
    while(st <= ed) {
        temp = a[st];
        a[st] = a[ed];
        a[ed] = temp;
        st = st + 1;
        ed = ed - 1;
    }
    return a;
}

function processData(input) {
    const lines = input.trim().split('\n');
    const t = parseInt(lines[0]);
    let currentLine = 1;

    for (let i = 0; i < t; i++) {
        const n = parseInt(lines[currentLine++]);
        const a = lines[currentLine++].split(' ').map(Number);
        const result = findZigZagSequence(a, n);
        console.log(result.join(' '));
    }
}
    
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
