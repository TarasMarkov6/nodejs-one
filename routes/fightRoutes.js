import { Router } from "express";
import { fightersService } from "../services/fightService.js";
import {
  createUserValid,
  updateUserValid,
} from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

// OPTIONAL TODO: Implement route controller for fights
router.get("/", (req, res, next) => {
  try {
    const fights = fightersService.getAllFights();
    res.data = fights;
  } catch (err) {
    res.err = err.message;
  } finally {
    next();
  }
}, responseMiddleware);

router.get("/:id", (req, res, next) => {
  try {
    const fight = fightersService.getFightById(req.params.id);
    if (!fight) {
      return res.status(404).json({ error: true, message: "Fight not found" });
    }
    res.data = fight;
  } catch (err) {
    res.err = err.message;
  } finally {
    next();
  }
}, responseMiddleware);

export { router };
