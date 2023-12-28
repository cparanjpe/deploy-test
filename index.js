import express from 'express';

const app = express();

app.get('/',async(req,res)=>{
    res.send('APp deployed and running !!');
})


app.listen(3000, err => {
  if (err) {
    console.log(err);
    return process.exit(1);
  }
  console.log(`Server is running on 3000`);
});
