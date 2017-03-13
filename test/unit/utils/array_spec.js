import { splitMinuteAndNameFromTalks, sortByLargestToSmallestTalk } from '../../../src/utils/array';

describe('Utils: array', () => {
  describe('splitMinutesAndTalks():', () => {
    it('Should split the minutes and name from a array of talks', () => {
      const arrayOfTalks = [
        'Writing Fast Tests Against Enterprise Rails 60min',
        'Overdoing it in Python lightning',
      ];

      const minutesAndNames = [
        {
          min: 60,
          name: 'Writing Fast Tests Against Enterprise Rails 60min',
        },
        {
          min: 5,
          name: 'Overdoing it in Python lightning',
        },
      ];

      expect(splitMinuteAndNameFromTalks(arrayOfTalks)).to.be.eql(minutesAndNames);
    });
  });

  describe('sortByLargestToSmallestTalk():', () => {
    it('Should sort array of talks by largest time to smallest', () => {
      const arrayOfTalks = [{ min: 45 }, { min: 60 }, { min: 30 }];
      const sortedTalks = [{ min: 60 }, { min: 45 }, { min: 30 }];

      expect(sortByLargestToSmallestTalk(arrayOfTalks)).to.be.eql(sortedTalks);
    });
  });
});
