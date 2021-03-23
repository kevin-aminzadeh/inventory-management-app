const UserModel = require('../models/user.model');

// Authenticate User Based On Login Data Sent In Request
// !! For Security purposes error messages in production should be more ambiguous !!
exports.authenticateUser = async (reqData) => {
  try {
    // Fetch User Record Where Email Provided In Request Matches The Email In The Record
    const userData = await UserModel.findOne({
      where: { email: reqData.email },
    });

    // If a matching user record was found, proceed
    if (userData) {
      // Check that The hash of the password in the request matches the one in the User's record
      const passwordIsValid = await userData.checkPassword(reqData.password);

      // If that password in the request is valid, return the user data
      if (passwordIsValid) {
        return userData;
      }
      // Otherwise throw an error
      throw Error('Incorrect Email or Password, Please Try Again.');
    }
    // Otherwise throw an error stating that no user with that email address exists
    throw Error('No user with that email address exists.');
  } catch (err) {
    throw Error(err);
  }
};
