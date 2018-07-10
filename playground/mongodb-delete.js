const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect ', err);
	}
	console.log('Connected to the database');

	// db.collection('Users').deleteMany({name : "Abubakar"}).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndDelete({
		_id: new ObjectID('5b447255dc5f101f10d29cc8')
	}).then((result) => {
		console.log(result);
	});
});