const request = require('request');
const fs = require('fs');
const path = require('path');

const download = (uri, filename, callback) => {
  request.head(uri, (err, res, body) => {
    request(uri).pipe(fs.createWriteStream(filename))
      .on('close', callback);
  });
};

