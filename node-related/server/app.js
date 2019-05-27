const http = require("http");
const hostname="localhost";
const port = "3000";

const fs = require("fs");

const server = http.createServer((req,res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/html");

	fs.readFile("index.html", (err, html) => {
		if(err) {
			throw err;
		}
		res.write(html);
		res.end();
	});

});


server.listen(port, hostname, () => {
	console.log("Server started on "+port);
});
	
