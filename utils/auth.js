const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect('/dashboard/login');
  } else {
    next();
  }
};

module.exports = withAuth;
