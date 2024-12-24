var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Welcome to CLOUD ASEEM  & Credit with Thanks to - A Monk in Cloud'); //write a response to the client
  res.end(); //end the response
}).listen(3000); //the server object listens on port 3000 , mention your port specific

