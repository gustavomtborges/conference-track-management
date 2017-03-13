import { MORNING_SESSION_DURATION, INITIAL_TIME } from '../configs/constants';

export default function setTimeForTalks(tracks) {
  const updatedTracks = tracks.map((track) => {
    let trackDuration = track.talks[0].min;
    let talkDuration = 0;

    const morningTalks = track.talks.map((talk) => {
      if (trackDuration <= MORNING_SESSION_DURATION) {
        INITIAL_TIME.setHours(9, 0, 0);
        INITIAL_TIME.setMinutes(talkDuration);
        talk.time = INITIAL_TIME.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
        talkDuration += talk.min;
        trackDuration += talk.min;
      }
      return talk;
    }).filter(talk => talk.time);
    morningTalks.push({ name: 'Lunch', time: '12:00 PM' });

    const afternoonTalks = track.talks.filter(talk => !talk.time);
    console.log(morningTalks);
    console.log(afternoonTalks);

    return track;
  });

  console.log(updatedTracks[0]);
  return updatedTracks;
}
