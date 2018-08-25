var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI
  || 'mongodb://admin:admin123@ds022228.mlab.com:22228/todo-app',
  { useNewUrlParser: true });
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });
// process.env.MONGOLAB_URI = mongodb://admin:admin123@ds022228.mlab.com:22228/todo-app
module.exports = {mongoose};
