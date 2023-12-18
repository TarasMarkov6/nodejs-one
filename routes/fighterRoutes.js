import { Router } from "express";
import { fighterService } from "../services/fighterService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";
import {
  createFighterValid,
  updateFighterValid,
} from "../middlewares/fighter.validation.middleware.js";

const router = Router();

// TODO: Implement route controllers for fighter
router.get("/", (req, res, next) => {
  try {
    const fighters = fighterService.getAllFighters();
    res.data = fighters;
  } catch (err) {
    res.err = err.message;
  } finally {
    next();
  }
}, responseMiddleware);

router.get("/:id", (req, res, next) => {
  try {
    const fighter = fighterService.getFighterById(req.params.id);
    if (!fighter) {
      return res.status(404).json({ error: true, message: "Fighter not found" });
    }
    res.data = fighter;
  } catch (err) {
    res.err = err.message;
  } finally {
    next();
  }
}, responseMiddleware);

router.post("/", createFighterValid, (req, res, next) => {
  try {
    const newFighter = fighterService.createFighter(req.validatedData);
    res.status(200).json(newFighter);
  } catch (err) {
    res.err = err.message;
    next(err);
  } finally {
    next();
  }
}, responseMiddleware);

router.put("/:id", updateFighterValid, (req, res, next) => {
  try {
    const updatedFighter = fighterService.updateFighter(req.params.id, req.validatedData);
    if (!updatedFighter) {
      return res.status(404).json({ error: true, message: "Fighter not found" });
    }
    res.data = updatedFighter;
  } catch (err) {
    res.err = err.message;
    next(err);
  } finally {
    next();
  }
}, responseMiddleware);

router.delete("/:id", (req, res, next) => {
  try {
    const deletedFighter = fighterService.deleteFighter(req.params.id);
    if (!deletedFighter) {
      return res.status(404).json({ error: true, message: "Fighter not found" });
    }
    res.data = deletedFighter;
  } catch (err) {
    res.err = err.message;
  } finally {
    next();
  }
}, responseMiddleware);

export { router };
