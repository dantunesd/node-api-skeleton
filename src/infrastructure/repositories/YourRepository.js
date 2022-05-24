/* eslint-disable class-methods-use-this */
class YourRepository {
  async create(something) {
    return { id: Date.now(), ...something };
  }

  async getAll() {
    return [];
  }
}

module.exports = YourRepository;
