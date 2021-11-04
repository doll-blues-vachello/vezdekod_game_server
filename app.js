const edgeMultiply = require('edge-multiplay')

edgeMultiply.wsServer.on('newConnection', (path, connection)=>{
    edgeMultiply.addToLobby(connection)
})