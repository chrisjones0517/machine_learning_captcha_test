const fs = require('fs');

fs.readFile('image79154section3.jpg', (err, data) => {
    if (err) console.log(err);
    fs.writeFile('imageHex.txt', data, (err) => {
        if (err) console.log(err);
        console.log('file written!');
    });
})