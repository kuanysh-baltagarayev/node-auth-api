import User from '../models/User.js';
import mongoose from 'mongoose';

export async function getAllUsers() {
  return User.find();
}

export async function getUserById(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) return null;
  return User.findById(id);
}

export async function deleteUser(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) return null;
  return User.findByIdAndDelete(id);
}
