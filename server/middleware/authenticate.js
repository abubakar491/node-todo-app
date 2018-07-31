var {User} = require('./../models/user');

var authenticate = (req, res, next) => {
	var token = req.header('x-auth');

	User.findByToken(token).then((user) => {
		if(!user){
			// we can send => res.status(401).send(); but efficent way would be return Promise.reject(); it will take us to catch
			return Promise.reject();
		}
		req.user = user;
		req.token = token;
		next();
	}).catch((e) => {
		res.status(401).send();
	});
};

module.exports = {authenticate};