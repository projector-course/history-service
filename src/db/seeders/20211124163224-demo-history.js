module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('history', [{
      userId: 1,
      videoId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('history', null, {});
  },
};
