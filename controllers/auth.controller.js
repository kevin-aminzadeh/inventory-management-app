const AuthService = require('../services/auth.service');

exports.authenticateUser = async (req, res, next) => {
  // Validate Request Parameters/Queries
  const requestData = { ...req.body };
  try {
    const authenticatedUser = await AuthService.authenticateUser(requestData);

    // If the user was authenticated successfully, store user's id and role_id in the session and set logged_in to true
    // !! The if statement here is just a last resort saftey measure, the Auth service implementation should throw errors if there are any issues which should pause further code execution, the code below should only be executed if the authentication operation was successful, regardless of if there is or is not an if statement below !!
    if (authenticatedUser) {
      req.session.save(() => {
        req.session.user_id = authenticatedUser.id;
        req.session.logged_in = true;
        req.session.role_id = authenticatedUser.role_id;
        res.status(200).json({
          user: authenticatedUser,
          message: 'User successfully authenticated.',
        });
      });
    }
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};
