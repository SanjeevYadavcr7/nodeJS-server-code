const fs = require('fs');
const path = require('path');
const http = require('http');
const PORT = process.env.PORT || 3000;

const app = http.createServer((req, res) => {
    
    const file = (req.url === '/') ? 'index.html' : req.url;
    // if file extension is nothing then it will be false
    const ext = path.extname(file);
    if(!ext){
        file += '.html';
    }    

    let contentType = 'text/html';
    switch(ext){
        case '.css':
            contentType= 'text/css'
            break;
        case '.js':
            contentType= 'text/javascript'
            break;
        default:
            contentType= 'text/html'
            break;
    }
    
    const filePath = path.join(__dirname, 'public', file);
    
    fs.readFile(filePath, (err, data) => {
        if(err){
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
                if(err){
                    res.writeHead(500);
                    res.end('Error while reading error.html');
                }
                else{
                    res.writeHead(404,{
                        'Content-Type': contentType
                    })
                    res.end(data);
                }
            })
        }
        else{
            res.writeHead(200, {
                'Content-Type': contentType
            })
            res.end(data);
        }
    })

})

app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`)
});