/**
 * ConnexionController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	viewConnexion: function(req,res,next){
	User.find().exec(function getUser(err,user){
		return res.view({
			users:user
		});	
	})
				
	}
	
};