/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	viewAllUser: function(req,res,next){
		User.find().populate("file").exec(function getUser(err,user){
			console.log(user);
			return res.view({
				users:user
			});
		});

		
	}
	
};

