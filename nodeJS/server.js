const fs = require('fs');


// const {a, b} = require('./mods/sample');
// console.log(`a = ${a}`);
// console.log(`b = ${b}`);

// let users = [];
// console.log(users);
// fs.readFile('./db/dto.json', 'utf-8', (err, data) => {
//     if (err){
//         console.log('some error');
//     }else {
//         users = JSON.parse(data);
//         console.log(users);
//     }
// })

let user = {
    name: 'user 3',
    age: 14
}

// fs.readFile('./db/dto.json', 'utf-8', (err, data) => {
//     if (err){
//         console.log('some error');
//     }else {
//         let localUsers = JSON.parse(data);
//         localUsers.push(user);

//         fs.writeFile('./db/dto.json', JSON.stringify(localUsers), (err) => {
//             if(err){
//                 console.log('some new error');
//             }
//         })
//     }
// })

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello Epta');
        res.end();
    } else if(req.url === '/user'){
        res.write(JSON.stringify(user));
        res.end();
    }
})

server.listen(3000);

server.on('connection', () => {
    console.log('new connection');
})