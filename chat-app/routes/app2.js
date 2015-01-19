//Load modules
//var System = require('systemjs');
//System.import('es6-shim');
//var ASQ = require('asynquence');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var emic = require('./emic3.js').create();
//var emic = require('./emicparser.js')(io);

emic.on('status', function(status) {
	// todo: send status to all io clients
	console.log('Got status from emic %s', status);
});

// io.on('connection', function (socket) {

// });

// function report (msg) {
// 	console.log(msg)
// };

// function repErr (err) {
// 	console.error(err)
// };
// function repEmic (msg) {
// 	report('hello to all from EMIC');
// 	io.emit('emic message', msg);
// };
// app.get('/', function (req, res){
//     //var html = fs.readFileSync("index3.html", "utf8");
//     //res.send(html);
//     res.sendFile(__dirname + '/main2.html');
// });

// io.on('connection', function (socket){
// 	report('a user connected');
// 	socket.on('disconnect', function() {
// 		report('a user disconnected');
// 	});
// 	socket.on('user message', function (msg){
// 		report('USER: ' + msg);
// 		io.emit('user message', msg);
// 		//emic.speak(msg);
// 	});
// 	socket.on('emic message', function (msg) {
// 		report('EMIC: ' + msg)
// 		io.emit('emic message', msg)
// 	})
// });


http.listen(3001, function (){
    report('listening on *:3001');
});


