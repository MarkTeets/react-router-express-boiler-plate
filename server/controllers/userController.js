// const db = require('../models/renameMe.js');

const userController = {};

/*
// CHECK USERNAME IN DATABASE --------------------------------------------------------------------------------------------------------------------------------------
userController.checkUsername = (req, res, next) => {
	const { username, password } = req.body;
	const values = [username];
	const queryString = `SELECT * FROM "public"."user"
	WHERE username = $1`;

	db.query(queryString, values)
		.then((data) => {
			if (data.rows[0] !== undefined) {
				res.locals.status = 'UserNameExists';
				return next();
			} else {
        // console.log('Username does not already exist');
        res.locals.newUser = { username, password };
        res.locals.status = 'valid';
        return next();
      }
		})
		.catch((err) => {
			const errorObj = {
				log: `userController.createUser middleware error ${err.message}`,
				status: 501,
				message: 'Login failed',
			};
			return next(errorObj);
		});
};
*/

module.exports = userController;