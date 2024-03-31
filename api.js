const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/', (req, res) => {
     console.log(req.method);
    res.send('Hello World!')
    })
    
    app.put('/user', (req, res) => {
         console.log(req.method);
        res.send('Got a PUT request at /user')
         })
        app.post('/', (req, res) => {
             console.log(req.method);
            res.send('Got a POST request')
             })
            
            app.delete('/user', (req, res) => {
             console.log(req.method);
                 res.send('Got a DELETE request at /user')
                 })
                                    