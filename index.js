const express = require('express') // Importing express library.
const port = 3000 // The server will be hosted on port 3000.
const app = express()
app.get("/route-handler",function(req,res){ // if url contains route-handler then this will be executed.
    res.json({ // server will respond with json file.
        name1: "Gaurav Shah",
        age: 20
    })
})
app.get('/',function(req,res){
    res.send("<b> Hello World") // Re-run the process after writing this.
})
app.listen(port,()=>{
    console.log(`App listening on ${port}`);
})