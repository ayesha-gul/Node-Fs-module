let fileSystem = require('fs');

fileSystem.readFile('show.js', 'utf8' , function(err,data) 

{
    console.log( ' here we got the readed data'+ ' '  + data)
    // console.log( ' sorry we got an error!'+ ' '  + err)
    
})


fileSystem.writeFile('new.js', 'console.log("Data is written")', function (err) {
    
    console.log(' Data successfully written');
})

// we can append the data in any existing file 

fileSystem.appendFile('new.js', "console.log('Data is  appended')" , function (err) {

    console.log('data is appended successfully ');
    
} )

// to delete any file 

// fileSystem.unlink('test.js', function (err) {
//     console.log( ' The test.js file unlinked or Deleted successfully');
    
// })