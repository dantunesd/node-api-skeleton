const YourService = require('./YourService');

const yourRepositoryMock = {
  create: jest.fn(),
  getAll: jest.fn(),
};

const yourService = new YourService(yourRepositoryMock);

describe('Create test case', () => {
  describe('given I receive a valid data', () => {
    yourRepositoryMock.create.mockResolvedValueOnce({
      id: 'id',
    });

    it('should save with success', async () => {
      await expect(yourService.create({})).resolves.toEqual({
        id: 'id',
      });
    });

    it('should call create with params', async () => {
      expect(yourRepositoryMock.create).toHaveBeenLastCalledWith({});
    });
  });
});

describe('GetAll test case', () => {
  describe('given I getAll', () => {
    yourRepositoryMock.getAll.mockResolvedValueOnce([]);

    it('should return all with success', async () => {
      await expect(yourService.getAll()).resolves.toEqual([]);
    });

    it('should call repository.getAll with params', async () => {
      expect(yourRepositoryMock.getAll).toHaveBeenLastCalledWith();
    });
  });
});
