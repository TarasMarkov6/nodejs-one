import { fightRepository } from "../repositories/fightRepository.js";

class FightersService {
  // OPTIONAL TODO: Implement methods to work with fights
  getAllFights() {
    return fightRepository.getAll();
  }

  getFightById(id) {
    return fightRepository.getOne({ id });
  }

  createFight(data) {
    return fightRepository.create(data);
  }

  updateFight(id, dataToUpdate) {
    return fightRepository.update(id, dataToUpdate);
  }

  deleteFight(id) {
    return fightRepository.delete(id);
  }
}

const fightersService = new FightersService();

export { fightersService };
