// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//http://localhost:3000/api/blogs?slug=how-to-learn-javascript

import * as fs from 'fs';


export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`,'utf-8', (err, data) => {
    if(err){
      res.status(500).json( {err : "no such blog found"});
    }
    console.log(req.query.slug)
    const JSONdata = JSON.parse(data)
    res.status(200).json( JSONdata);
  })
}