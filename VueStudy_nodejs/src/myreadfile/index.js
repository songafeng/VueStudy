var server = require("./server");  
var router = require("./router");  
var requestHandlers = require("./requestHandlers");  

var handle = {}  
handle["/listCategory"] = requestHandlers.listCategory;  
handle["/listProduct"] = requestHandlers.listProduct;  
handle["/readFile"] = requestHandlers.readFile;  
handle["/writeFile"] = requestHandlers.writeFile;  
  
server.start(router.route, handle);  