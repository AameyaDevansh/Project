const express = require('express');
const { listUsers } = require('../controllers/userController');
const auth = require('../middleware/auth');

const router = express.Router();
router.use(auth);          // protect the route

router.get('/', listUsers);  // GET /api/users

module.exports = router;
