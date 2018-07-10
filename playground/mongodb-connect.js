const {MongoClient, ObjectID} = require('mongodb');


// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect', err);
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').insertOne({
	// 	text: 'Some text here',
	// 	completed: false
	// }, (err, result) => {
	// 	if(err){
	// 		return console.log('Unable to add data', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	db.collection('Users').insertOne({
		name: 'Abubakar',
		age: 25,
		location: 'pakistan'
	}, (err, result) => {
		if(err){
			return console.log('Unable to add the record');
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
	});

	db.close();
});