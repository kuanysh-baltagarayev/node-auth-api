import express from 'express';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import User from '../models/User.js';
import * as authController from '../controllers/authController.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

// router.post('/register', async (req, res) => {
//   const { email, password } = req.body;

//   const exists = await User.findOne({ email });
//   if (exists) return res.status(400).json({ message: 'Email уже используется' });

//   const passwordHash = await bcrypt.hash(password, 10);

//   const user = await User.create({ email, passwordHash });
//   res.status(201).json({ message: 'Пользователь зарегистрирован', userId: user._id });
// });

// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });
//   if (!user) return res.status(401).json({ message: 'Неверный email или пароль' });

//   const valid = await bcrypt.compare(password, user.passwordHash);
//   if (!valid) return res.status(401).json({ message: 'Неверный email или пароль' });

//   const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//   res.json({ token });
// });

// // Защищённый маршрут
// router.get('/me', auth, async (req, res) => {
//   const user = await User.findById(req.userId).select('-passwordHash');
//   res.json(user);
// });

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/me', authMiddleware, authController.getMe);

export default router;