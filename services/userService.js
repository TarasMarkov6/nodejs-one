import { userRepository } from "../repositories/userRepository.js";

class UserService {
  // TODO: Implement methods to work with user
  getAllUsers() {
    return userRepository.getAll();
  }

  getUserById(id) {
    return userRepository.getOne({ id });
  }

  createUser(data) {
    const existingUserWithEmail = userRepository.getOne({ email: data.email });
    if (existingUserWithEmail) {
      throw new Error("Email already exists");
    }
    const existingUserWithPhone = userRepository.getOne({ phoneNumber: data.phoneNumber });
    if (existingUserWithPhone) {
      throw new Error("Phone number already exists");
    }
    return userRepository.create(data);
  }

  updateUser(id, dataToUpdate) {
    return userRepository.update(id, dataToUpdate);
  }

  deleteUser(id) {
    return userRepository.delete(id);
  }

  search(search) {
    const item = userRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }
  
  search(search) {
    const item = userRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }
}

const userService = new UserService();

export { userService };
