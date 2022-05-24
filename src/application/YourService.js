class YourService {
  constructor(YourRepository) {
    this.YourRepository = YourRepository;
  }

  async create(something) {
    return this.YourRepository.create(something);
  }

  async getAll() {
    return this.YourRepository.getAll();
  }
}

module.exports = YourService;
