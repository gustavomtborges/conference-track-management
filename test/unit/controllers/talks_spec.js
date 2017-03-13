import setTimeForTalks from '../../../src/controllers/talks';

describe('Controller: talks', () => {
  describe('setTimeForTalks():', () => {
    it('Should set the time for each talk', () => {
      const tracks = [{
        number: 1,
        talks: [
          { min: 60, name: 'default talk 1' },
          { min: 60, name: 'default talk 13' },
          { min: 60, name: 'default talk 12' },
          { min: 60, name: 'default talk 10' },
          { min: 60, name: 'default talk 8' },
          { min: 60, name: 'default talk 6' },
          { min: 45, name: 'default talk 2' },
        ],
      }, {
        number: 2,
        talks: [
          { min: 45, name: 'default talk 11' },
          { min: 45, name: 'default talk 5' },
          { min: 45, name: 'default talk 4' },
          { min: 30, name: 'default talk 3' },
          { min: 30, name: 'default talk 9' },
          { min: 30, name: 'default talk 7' },
        ],
      }];

      const talksWithTime = [{
        number: 1,
        talks: [
          { min: 60, name: 'default talk 1', time: '9:00 AM' },
          { min: 60, name: 'default talk 13', time: '10:00 AM' },
          { min: 60, name: 'default talk 12', time: '11:00 AM' },
          { name: 'Lunch', time: '12:00 PM' },
          { min: 60, name: 'default talk 10', time: '1:00 PM' },
          { min: 60, name: 'default talk 8', time: '2:00 PM' },
          { min: 60, name: 'default talk 6', time: '3:00 PM' },
          { min: 45, name: 'default talk 2', time: '4:00 PM' },
          { name: 'Networking Event', time: '5:00 PM' },
        ],
      }, {
        number: 2,
        talks: [
          { min: 45, name: 'default talk 11', time: '9:00 AM' },
          { min: 45, name: 'default talk 5', time: '9:45 AM' },
          { min: 45, name: 'default talk 4', time: '10:30 AM' },
          { min: 30, name: 'default talk 3', time: '11:15 AM' },
          { name: 'Lunch', time: '12:00 PM' },
          { min: 30, name: 'default talk 9', time: '1:00 PM' },
          { min: 30, name: 'default talk 7', time: '1:30 PM' },
          { name: 'Networking Event', time: '5:00 PM' },
        ],
      }];

      expect(setTimeForTalks(tracks)).to.be.eql(talksWithTime);
    });
  });
});
