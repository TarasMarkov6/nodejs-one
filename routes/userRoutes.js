import { Router } from "express";
import { userService } from "../services/userService.js";
import {
  createUserValid,
  updateUserValid,
} from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

// TODO: Implement route controllers for user
router.get("/", (req, res, next) => {
  try {
    const users = userService.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.err = err.message;
  } finally {
    next();
  }
}, responseMiddleware);

router.get("/:id", (req, res, next) => {
  try {
    const user = userService.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: true, message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.err = err.message;
  } finally {
    next();
  }
}, responseMiddleware);

router.post("/", createUserValid, (req, res, next) => {
  try {
    const newUser = userService.createUser(req.validatedData);
    res.status(200).json(newUser);
  } catch (err) {
    res.err = err.message;
    next(err);
  } finally {
    next();
  }
}, responseMiddleware);

router.put("/:id", updateUserValid, (req, res, next) => {
  try {
    const updatedUser = userService.updateUser(req.params.id, req.validatedData);
    if (!updatedUser) {
      return res.status(404).json({ error: true, message: "User not found" });
    }
    res.data = updatedUser;
  } catch (err) {
    res.err = err.message;
    next(err);
  } finally {
    next();
  }
}, responseMiddleware);

router.delete("/:id", (req, res, next) => {
  try {
    const deletedUser = userService.deleteUser(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: true, message: "User not found" });
    }
    res.data = deletedUser;
  } catch (err) {
    res.err = err.message;
  } finally {
    next();
  }
}, responseMiddleware);

export { router };
