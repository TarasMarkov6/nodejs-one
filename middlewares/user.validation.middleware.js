import { USER } from "../models/user.js";

const createUserValid = (req, res, next) => {
  // TODO: Implement validatior for USER entity during creation
  const { id, ...userData } = req.body;

  const requiredFields = ["firstName", "lastName", "email", "phoneNumber", "password"];
  const missingFields = requiredFields.filter(field => !userData.hasOwnProperty(field));

  if (missingFields.length > 0) {
    return res.status(400).json({ error: true, message: `Missing required fields: ${missingFields.join(', ')}` });
  }

  if (typeof userData.firstName !== 'string') {
    return res.status(400).json({ error: true, message: 'First name must be string' });
  }
  
  if (typeof userData.lastName !== 'string') {
    return res.status(400).json({ error: true, message: 'Last name must be string' });
  }

  if (userData.password.length < 3) {
    return res.status(400).json({ error: true, message: 'Password must contain at least 3 characters' });
  }

  const phoneRegex = /^\+380\d{9}$/;
  if (!phoneRegex.test(userData.phoneNumber)) {
    return res.status(400).json({ error: true, message: 'Invalid phone number format. It should be in the format: +380xxxxxxxxx' });
  }

  if (!userData.email.endsWith('@gmail.com')) {
    return res.status(400).json({ error: true, message: 'Email should have @gmail.com domain' });
  }

  req.validatedData = userData;
  next();
};

const updateUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during update
  const { id, ...userData } = req.body;

  if (Object.keys(userData).length === 0) {
    return res.status(400).json({ error: true, message: "At least one field must be present" });
  }

  if (typeof userData.firstName !== 'string') {
    return res.status(400).json({ error: true, message: 'First name must be string' });
  }
  
  if (typeof userData.lastName !== 'string') {
    return res.status(400).json({ error: true, message: 'Last name must be string' });
  }

  if (userData.password.length < 3) {
    return res.status(400).json({ error: true, message: 'Password must contain at least 3 characters' });
  }

  const phoneRegex = /^\+380\d{9}$/;
  if (!phoneRegex.test(userData.phoneNumber)) {
    return res.status(400).json({ error: true, message: 'Invalid phone number format. It should be in the format: +380xxxxxxxxx' });
  }

  if (!userData.email.endsWith('@gmail.com')) {
    return res.status(400).json({ error: true, message: 'Email should have @gmail.com domain' });
  }

  req.validatedData = userData;
  next();
};

export { createUserValid, updateUserValid };
