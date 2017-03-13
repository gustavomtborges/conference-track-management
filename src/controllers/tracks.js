import { TRACK_DURATION } from '../configs/constants';

export function calcNumberOfTracks(talks) {
  const tracks = [];
  const totalMinutes = talks.reduce((prev, curr) => prev + curr.min, 0);
  const numberOfTracks = totalMinutes > 420 ? Math.ceil(totalMinutes / TRACK_DURATION) : 1;
  for (let i = 1; numberOfTracks >= i; i++) {
    tracks.push({ number: i, talks: [] });
  }

  return { tracks, talks, totalMinutes };
}

export function pickUpTalksForATrack(data) {
  if (data.totalMinutes > TRACK_DURATION) {
    return data.tracks.map((track) => {
      let duration = data.talks[0].min;
      while (data.talks.length && duration <= TRACK_DURATION) {
        const talk = data.talks.shift();
        duration += talk.min;
        track.talks.push(talk);
      }
      duration = 0;
      return track;
    });
  }
  return data.tracks.map((track) => {
    data.talks.map(talk => track.talks.push(talk));
    return track;
  });
}

