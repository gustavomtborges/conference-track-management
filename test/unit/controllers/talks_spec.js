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
          { min: 60, name: 'default talk 1', time: '9:00AM' },
          { min: 60, name: 'default talk 13', time: '10:00AM' },
          { min: 60, name: 'default talk 12', time: '11:00AM' },
          { min: 60, name: 'Lunch', time: '12:00PM' },
          { min: 60, name: 'default talk 10', time: '01:00PM' },
          { min: 60, name: 'default talk 8', time: '02:00PM' },
          { min: 60, name: 'default talk 6', time: '03:00PM' },
          { min: 45, name: 'default talk 2', time: '4:00PM' },
          { name: 'Networking Event', time: '4:45PM' },
        ],
      }, {
        number: 2,
        talks: [
          { min: 45, name: 'default talk 11', time: '9:00AM' },
          { min: 45, name: 'default talk 5', time: '9:45AM' },
          { min: 45, name: 'default talk 4', time: '10:30AM' },
          { min: 30, name: 'default talk 3', time: '11:15AM' },
          { min: 60, name: 'Lunch', time: '12:00AM' },
          { min: 30, name: 'default talk 9', time: '01:00PM' },
          { min: 30, name: 'default talk 7', time: '01:30PM' },
          { name: 'Networking Event', time: '02:00PM' },
        ],
      }];

      expect(setTimeForTalks(tracks)).to.be.eql(talksWithTime);
    });
  });
});
