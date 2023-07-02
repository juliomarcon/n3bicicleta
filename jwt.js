const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
  const payload = {
    userId: userId
  };

  const token = jwt.sign(payload, 'chave_secreta', { expiresIn: '1h' });

  return token;
};

const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  try {
    const decoded = jwt.verify(token, 'chave_secreta');
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Token inválido' });
  }
};

module.exports = {
  generateToken,
  authenticateToken
};
