const request = require('request');
const postStream = request.post('http://localhost:8099');
process.stdin.pipe(postStream).pipe(process.stdout);
