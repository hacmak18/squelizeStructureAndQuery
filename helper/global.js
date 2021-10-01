if(!process.ENV){
	global.environment = 'development';
} else {
	global.environment = process.ENV;
}

global.ROOT_PATH = require('path').join(__dirname, '../');
global.Models={};