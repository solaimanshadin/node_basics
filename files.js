const fs = require('fs');
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// console.log('Execute this first');

// fs.writeFile('./docs/blog2.txt', 'Hello World', ()=> {
//     console.log("file was Written");
// })

// if(!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err)=> {
//         if(err) {
//             console.log(err);
//         }
//         console.log('Folder Created');
//     })
// }else{
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log("Folder Deleted");
//     })
// }


if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err)=> {
        if(err) {
            console.log(err);
        }
        console.log("File Deleted");
    })
}else{
    fs.writeFile('./docs/deleteme.txt', 'hi', (err) => {
        console.log(err);
        console.log("Data Created");
    })
}