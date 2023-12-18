import { fighterRepository } from "../repositories/fighterRepository.js";

class FighterService {
  // TODO: Implement methods to work with fighters
  getAllFighters() {
    return fighterRepository.getAll();
  }

  getFighterById(id) {
    return fighterRepository.getOne({ id });
  }

  createFighter(data) {
    const existingFighterWithName = fighterRepository.getOne({ name: data.name });
    if (existingFighterWithName) {
      throw new Error("Fighter with the same name already exists");
    }
    return fighterRepository.create(data);
  }

  updateFighter(id, dataToUpdate) {
    return fighterRepository.update(id, dataToUpdate);
  }

  deleteFighter(id) {
    return fighterRepository.delete(id);
  }
}

const fighterService = new FighterService();

export { fighterService };
