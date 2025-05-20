import * as authService from '../services/authService.js';

export async function register(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await authService.register(email, password);
    res.status(201).json({ message: 'Регистрация успешна', userId: user._id });
  } catch (err) {
    next(err);
  }
}

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.json({ token });
  } catch (err) {
    next(err);
  }
}

export async function getMe(req, res, next) {
  try {
    const user = await authService.getUserById(req.userId);
    if (!user) return res.status(404).json({ message: 'Пользователь не найден' });
    res.json(user);
  } catch (err) {
    next(err);
  }
}