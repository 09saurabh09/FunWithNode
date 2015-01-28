var fs = require("fs");

if(fs.existsSync('temp'))
{
    console.log("Directory exists, removing...");
    //console.log("yes");
    if(fs.existsSync('temp/new.txt'))
    {
        
        fs.unlinkSync('temp/new.txt')
    }
    fs.rmdirSync('temp');
}

fs.mkdirSync('temp');

if(fs.existsSync('temp'))
{
    //console.log("yes");
    process.chdir('temp');
    fs.writeFileSync('test.txt', 'Test Data');
    fs.renameSync('test.txt','new.txt');
    console.log("File Size: "+ fs.statSync('new.txt').size + 'bytes' );
    console.log("File Contents: "+ fs.readFileSync('new.txt'));
}