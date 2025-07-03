const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const authHeader = req.header('Authorization'); // "Bearer TOKEN"
  if (!authHeader) return res.status(401).json({ msg: 'No token, auth denied' });

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;           // { id: ... }
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token not valid' });
  }
};
