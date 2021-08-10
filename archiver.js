const fs = require('fs');
const archiver = require('archiver');
const directoryFiles = require('../jsons/directory.json');

let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();

let outputFileName = day + '-' + month + '-' + year + '.zip';

// create a file to stream archive data to.
var output = fs.createWriteStream(directoryFiles.emailableReportDirectory + '/' + outputFileName);
var archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level.
});

// listen for all archive data to be written
// 'close' event is fired only when a file descriptor is involved
output.on('close', function() {
    // console.log(archive.pointer() + ' total bytes');
    console.log('INFO: archiver has been finalized and the output file descriptor has closed.');
});

// This event is fired when the data source is drained no matter what was the data source.
// It is not part of this library but rather from the NodeJS Stream API.
// @see: https://nodejs.org/api/stream.html#stream_event_end
output.on('end', function() {
    console.log('INFO: Data has been drained');
});

archive.pipe(output);

// append files from a sub-directory, putting its contents at the root of archive
let dirLocation = directoryFiles.reportDirectory + '/' + day + '-' + month + '-' + year;
archive.directory(dirLocation, false);

// finalize the archive (ie we are done appending files but streams have to finish yet)
// 'close', 'end' or 'finish' may be fired right after calling this method so register to them beforehand
archive.finalize();