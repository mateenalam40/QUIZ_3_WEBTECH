import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  return jwt.sign({ id }, 'mateen@21', {
    expiresIn: '30d',
  });
};

export default generateToken;
