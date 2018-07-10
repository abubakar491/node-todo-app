const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect', err);
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').find({
	// 	_id: new ObjectID('5b4474e222ca91b6343c6f30')
	// }).toArray().then((docs) => {
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to connect to database ', err)
	// });

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count ${count}`);
	// }, (err) => {
	// 	console.log('Unable to connect to database ', err)
	// });

	db.collection('Users').find().count().then((count) => {
		console.log(count);
	}, (err) => {
		console.log('Unable to fetch ', err)
	});

	//db.close();
});