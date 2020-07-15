const express = require('express');
const nodemailer = require('nodemailer')
const http = require('http');
const morgan = require('morgan')

const port = process.env.PORT || 3000;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '// TODO: your email id goes here' ,
        pass: '// TODO: your email id app_password goes here'
    }
});

const app = express();
app.use(morgan('dev'));

app.all('/', (req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    const html = `<html><body>
    <h1>Rest-API for sending mail</h1></br>
    <h2>http://{domain}/send?to={enter to email}&sub={enter subject}&dt={enter mail body}</h2>
    <h3>* Note: Use plus for space while entering subject and mail data.</h3>
    </body></html>`
    res.end(html);
})

app.all('/send', (req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    const to = req.query.to;
    const subject = req.query.sub;
    const dt = req.query.dt;

    if(to==undefined || subject==undefined || dt==undefined){
        res.statusCode = 400;
        const html = `
    <html><body>
    <h1>Bad Request... invalid url</h1>
    </body></html>`;
        res.end(html);
        return;
    }
    
    const mailOptions = {
        from: 'your name <your email>', // Something like: John Snow <john@gmail.com>
        to: to,
        subject: subject, // email subject
        html: `<p style="font-size: 18px;">${dt}</p>
            <br />
        ` // you can constomize email design here
    };

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            res.end(`<html><body><h1>${error}</h1></body></html>`)
        }else{
            res.end(`<html><body><h1>Mail Successfully Send To ${to}</h1></body></html>`)
        }
    })
})

const server = http.createServer(app);
server.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
})