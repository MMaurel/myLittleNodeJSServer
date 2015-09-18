var server = require('./server');
var router = require('./router');
var controller = require('./controllers/controller');

var handle = {}
handle['/'] = controller.start;
handle['/start'] = controller.start;
handle['/main.css'] = controller.mainCss;

server.start(router.route, handle);