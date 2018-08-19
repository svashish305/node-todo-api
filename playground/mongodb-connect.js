// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj); 

// var user = {name: 'shubhashish', age: 22};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
  var db = client.db('TodoApp');
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into Users  (name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Shubhashish',
  //   age: 22,
  //   location: 'India'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  client.close();
});
