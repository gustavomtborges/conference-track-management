import {
  calcNumberOfTracks,
  pickUpTalksForATrack,
} from '../../../src/controllers/tracks';

describe('Controller: tracks', () => {
  describe('calcNumberOfTracks():', () => {
    it('Should calculate the necessary number of tracks given a list of talks', () => {
      const talks = [
        { min: 60, name: 'default talk 1' },
        { min: 45, name: 'default talk 2' },
        { min: 30, name: 'default talk 3' },
        { min: 45, name: 'default talk 4' },
        { min: 45, name: 'default talk 5' },
        { min: 60, name: 'default talk 6' },
        { min: 30, name: 'default talk 7' },
        { min: 60, name: 'default talk 8' },
        { min: 30, name: 'default talk 9' },
        { min: 60, name: 'default talk 10' },
        { min: 45, name: 'default talk 11' },
        { min: 60, name: 'default talk 12' },
        { min: 60, name: 'default talk 13' },
      ];

      const tracks = [{ number: 1, talks: [] }, { number: 2, talks: [] }];
      const totalMinutes = 630;

      expect(calcNumberOfTracks(talks)).to.be.eql({ tracks, talks, totalMinutes });
    });
  });

  describe('pickUpTalksForATrack():', () => {
    it('Should pick up talks for a track that fits your duration of 420min', () => {
      const tracks = [{ number: 1, talks: [] }, { number: 2, talks: [] }];
      const talks = [
        { min: 60, name: 'default talk 1' },
        { min: 60, name: 'default talk 13' },
        { min: 60, name: 'default talk 12' },
        { min: 60, name: 'default talk 10' },
        { min: 60, name: 'default talk 8' },
        { min: 60, name: 'default talk 6' },
        { min: 45, name: 'default talk 2' },
        { min: 45, name: 'default talk 11' },
        { min: 45, name: 'default talk 5' },
        { min: 45, name: 'default talk 4' },
        { min: 30, name: 'default talk 3' },
        { min: 30, name: 'default talk 9' },
        { min: 30, name: 'default talk 7' },
      ];
      const totalMinutes = 630;

      const updatedTracks = [{
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

      expect(pickUpTalksForATrack({ tracks, talks, totalMinutes }))
        .to.be.eql(updatedTracks);
    });
  });
});
