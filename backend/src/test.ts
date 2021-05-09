const fetchh = require("node-fetch");
const getIp= async ()=>{
    console.log("we are asking for ip address");
  try{

      const res= await fetchh ('http://localhost:5000');
      const data=await res.text();
      console.log("data we got",data);
  }
  catch(err){
      console.log(err)
  }
  
      //return res
  
  }
  try{
    getIp();
  }

  catch{
      console.log("wer are error in takiing input")
  }