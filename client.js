const Net = require('net')
const port = 8081
const host = 'localhost'

const client = new Net.Socket()

client.connect({
    port: port,
    host: host
}, function () {
    console.log('TCP connection established with the server succesfully')

    client.write('Hello server from client side')
})

client.on('data', function (chunk) {
    console.log(`Data received from the server : ${chunk.toString()}`)

    client.end()
})

client.on('end', function () {
    console.log('End connection from the client side')
})