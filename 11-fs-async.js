const { log } = require('console');
const {readFile, writeFile} = require('fs');

log('start')
readFile('./content/first.txt','utf8',(err,result) => {
  if(err){
    console.log(err);
    return ;
  }
  const first = result;
  readFile('./content/second.txt','utf8',(err,result)=>{
    if(err){
      console.log(err);
      return ;
    }
    const second = result;
  writeFile('./content/result-async.txt',
  `NOTRE DAME`,{flag:'a'},
    (err) => {
      if(err){
        console.log(err);
        return;
      }
      console.log('done with this task');
    }
  );
  });
})
log('starting the next task'
)

