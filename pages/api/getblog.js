// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//http://localhost:3000/api/getblog

import * as fs from 'fs';


export default function handler(req, res) {
  fs.readdir(`blogdata`, (err, data) => {
    if(err){
      res.status(500).json( {err : "no directory"});
    }
    
    res.status(200).json( data);
  })
}

