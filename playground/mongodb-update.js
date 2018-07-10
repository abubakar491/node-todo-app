const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to database', err);
	}
	console.log('Connected to database');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5b4474e222ca91b6343c6f30')
	// }, {
	// 	$set: {
	// 		completed: false
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });
	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5b3e8503db12ea2420255163')
	}, {
		$set:{
			name: "Abubakar"
		},
		$inc: {
			age:5
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});
});