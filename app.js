const WebSocket = require('ws')


const wss = new WebSocket.Server({ port: 8000});

wss.on('connection', function connection(ws){
    ws.on('message', function message(data){
        if(data === 'ali'){
            console.log('hi '+data+ ' Ganteng')
        }
        console.log(...data);
    })

    ws.send(JSON.stringify({message:'hello world'}))
})