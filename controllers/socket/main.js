const _ = require('lodash');

let socketConnections = {};

module.exports = {
    addSocket : function(data, cb){
    	socketConnections[data.socket] = {};
        console.log('[SOCKET][MAIN] addSocket', data.socket)
        cb(_.size(socketConnections));
    },
    removeSocket : function(data, cb){
    	delete socketConnections[data.socket];
        console.log('[SOCKET][MAIN] removeSocket', data.socket)
        cb(_.size(socketConnections));
    }
}