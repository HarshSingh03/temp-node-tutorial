const { log } = require('console');
const {readFileSync, writeFileSync, write, writeFile} = require('fs');
log('start');
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

// console.log(first,second);

writeFileSync('./content/result-sync.txt','Here is the result : '+first+','+second,{flag:'a'});

log('done with this task');
log('starting the next task');
