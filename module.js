// const path = require('path');
// const fs = require('fs');

// fs.mkdir( path.join(__dirname, 'test'), (err) => {
//     (err) 
//     ? console.error()
//     : console.log('Folder Created...');
//     }
// )

// const location = path.join(__dirname, 'test', 'index.js');
// const fileContent = 'This is index file.'

// fs.writeFile(location, fileContent, (err) => {
//     (err)
//     ? console.log(err)
//     : console.log('File Created !')
// })


// const os = require('os');
// console.log(os.type());
// console.log(os.platform());

const Emitter = require('events');

class Auth extends Emitter{
    register(user){
        console.log('Registered successfully!');
        this.emit('verify', user);   // emitter
    }
}
 

const auth = new Auth();

// listeners
auth.on('verify', (user) => {
    console.log(`${user} is verified successfully!`)
})

auth.register('Sanjeev Yadav');