const handler = async (req, res) => {
    if (req.method === "POST") {
      const data = req.body;
      console.log(data);
      try {
        let da=await fetch(`http://localhost:5000/api`,{
            method: "POST",
            headers:{
                'content-type': 'application/json',
            },
            body:JSON.stringify(data),
        })
        let re=await da.json();
        console.log(re);
        if(re.ok){
            return res.status(200).json({ success: true, output:re.output });
        }
      }
      catch (error) {
        console.log(error);
        return res.status(400).json({ message: error.message });
      }
    }
    return res.status(400).json({ message: "Bad Request" })
  
  };
  
  export default handler;