const fs = require('fs');

var writerStream = fs.createWriteStream('output.txt');

// Write the data to stream with encoding to be utf8

for(let i=0;i<1000000;i++){
    writerStream.write('data data data data','UTF8');
}

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
   console.log("Write completed.");
});

writerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program Ended");


 