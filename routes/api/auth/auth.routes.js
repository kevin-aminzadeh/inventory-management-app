const router = require('express').Router();
const { User } = require('../../../models');
const withAuth = require('../../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findOne({
      attributes: { exclude: ['password'] },
    });
    console.log(userData);
    res.json();

    // const user = userData.map(())
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
