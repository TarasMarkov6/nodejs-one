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
