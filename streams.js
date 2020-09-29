const fs = require('fs')

const readStream = fs.createReadStream('./docs/lorem.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./docs/lorem2.txt');

// readStream.on('data' , (chunk) => {
//     console.log('---New Chunk---');
//     console.log(chunk);
//     writeStream.write('\nNew Chunk\n')
// })

readStream.pipe(writeStream)
