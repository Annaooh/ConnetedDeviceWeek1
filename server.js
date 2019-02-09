console.log("server is starting");

var express = require('express'); //import the express package
var app = express();
var server = app.listen(3000, listening);

function listening() {
  console.log("listening...");
}

app.use(express.static('website'));


app.get('/oscar1', sendOscar);

function sendOscar(request, response) {
    //var data = request.params;
    response.send("Be yourself. Everyone else is alreday taken. ");
}
//   response.send("!!!" )
// }

app.get('/oscar2', sendOscarr);

function sendOscarr(request, response) {
response.send("Discontent is the first step in the progress of a man or a nation ");
}

// }

// app.get('/meowwwww', sendQ)

// function sendQ(request, response) {
//   response.send("meow...")
// }

// app.get('/m eooow', sendCry)

// function sendCry(request, response) {
//   response.send("meow T_T")
// }