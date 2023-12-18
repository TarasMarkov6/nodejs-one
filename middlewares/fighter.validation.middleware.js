import { FIGHTER } from "../models/fighter.js";

const createFighterValid = (req, res, next) => {
  // TODO: Implement validatior for FIGHTER entity during creation
  const { id, ...fighterData } = req.body;

  const requiredFields = ["name", "power", "defense"];
  const missingFields = requiredFields.filter(field => !fighterData.hasOwnProperty(field));

  if (missingFields.length > 0) {
    return res.status(400).json({ error: true, message: `Missing required fields: ${missingFields.join(', ')}` });
  }

  if (typeof fighterData.power !== 'number' || fighterData.power < 1 || fighterData.power > 100) {
    return res.status(400).json({ error: true, message: 'Power should be a number between 1 and 100' });
  }

  if (typeof fighterData.defense !== 'number' || fighterData.defense < 1 || fighterData.defense > 10) {
    return res.status(400).json({ error: true, message: 'Defense should be a number between 1 and 10' });
  }

  if ('health' in fighterData) {
    if (typeof fighterData.health !== 'number' || fighterData.health < 80 || fighterData.health > 120) {
      return res.status(400).json({ error: true, message: 'Health should be a number between 80 and 120' });
    }
  }

  req.validatedData = fighterData; 
  next();
};

const updateFighterValid = (req, res, next) => {
  // TODO: Implement validatior for FIGHTER entity during update
  const { id, ...fighterData } = req.body;
  
  if (Object.keys(fighterData).length === 0) {
    return res.status(400).json({ error: true, message: "At least one field from the model must be present for update" });
  }

  if (typeof fighterData.power !== 'number' || fighterData.power < 1 || fighterData.power > 100) {
    return res.status(400).json({ error: true, message: 'Power should be a number between 1 and 100' });
  }

  if (typeof fighterData.defense !== 'number' || fighterData.defense < 1 || fighterData.defense > 10) {
    return res.status(400).json({ error: true, message: 'Defense should be a number between 1 and 10' });
  }

  if ('health' in fighterData) {
    if (typeof fighterData.health !== 'number' || fighterData.health < 80 || fighterData.health > 120) {
      return res.status(400).json({ error: true, message: 'Health should be a number between 80 and 120' });
    }
  }

  req.validatedData = fighterData; 
  next();
};

export { createFighterValid, updateFighterValid };
