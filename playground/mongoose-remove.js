const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

mongoose.set('useFindAndModify', false);

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneandRemove
// Todo.findByIdAndRemove

// Todo.findOneandRemove({_id: '5b810465fa233efcf1abad87'}).then((todo) => {
//
// });

// Todo.findByIdAndRemove('5b810465fa233efcf1abad87').then((todo) => {
//   console.log(todo);
// });
