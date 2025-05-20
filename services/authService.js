import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function register(email, password) {
  const exists = await User.findOne({ email });
  if (exists) {
    const error = new Error('Email уже используется');
    error.statusCode = 400;
    throw error;
  }

  const passwordHash = await bcrypt.hash(password, 10);
  return await User.create({ email, passwordHash });
}

export async function login(email, password) {
  const user = await User.findOne({ email });
  if (!user) throwAuthError();

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) throwAuthError();

  return jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

export async function getUserById(userId) {
  return User.findById(userId).select('-passwordHash');
}

function throwAuthError() {
  const err = new Error('Неверный email или пароль');
  err.statusCode = 401;
  throw err;
}