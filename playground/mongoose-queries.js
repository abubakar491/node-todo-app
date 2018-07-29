const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');

var id = '6b5e2cbf1cf186770d0b10914';

if(!ObjectID.isValid(id)){
	console.log('ObjectID is not valid');
}

User.findById(id).then((users) => {
	if(!users){
		return console.log('Object not found');
	}
	console.log('Users :', users);
}).catch((e) => console.log('Error : ', e));