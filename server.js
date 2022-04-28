const Net = require('net')
const port = 8081

const server = new Net.createServer()

server.listen(port, function () {
    console.log(`Server listening for connection requests on socket ${port}`)
})

//creates a connection with the client
server.on('connection', function (socket) {
    console.log('New connection has been initiated')

    //Send data to the client 
    socket.write('Hello client from the server side')

    //Receive data from the client
    socket.on('data', function (chunk) {
        console.log(`Data received from client : ${chunk.toString()}`)
    })

    //End connection on the server when the client wants to end the connections
    socket.on('end', function () {
        console.log('Connection closed with the client')
    })

    //Display error on the console during the operation
    socket.on('error', function (err) {
        console.log(`Error ${err}`)
    })
})


