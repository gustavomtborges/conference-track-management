import { MORNING_SESSION_DURATION, INITIAL_TIME } from '../configs/constants';

function setTimeForMorningTalks(talks, trackDuration, morningTalkDuration) {
  return talks.map((talk) => {
    if (trackDuration <= MORNING_SESSION_DURATION) {
      INITIAL_TIME.setHours(9, 0, 0);
      INITIAL_TIME.setMinutes(morningTalkDuration);
      talk.time = INITIAL_TIME.toLocaleTimeString([],
        { hour: '2-digit', minute: '2-digit' });
      morningTalkDuration += talk.min;
      trackDuration += talk.min;
    }
    return talk;
  }).filter(talk => talk.time);
}

function setTimeForAfternoonTalks(lastTalks, trackDuration, afternoonTalkDuration) {
  return lastTalks.map((talk) => {
    INITIAL_TIME.setHours(13, 0, 0);
    INITIAL_TIME.setMinutes(afternoonTalkDuration);
    talk.time = INITIAL_TIME.toLocaleTimeString([],
    { hour: '2-digit', minute: '2-digit' });
    afternoonTalkDuration += talk.min;
    trackDuration += talk.min;

    return talk;
  });
}


export default function setTimeForTalks(tracks) {
  return tracks.map((track) => {
    const trackDuration = track.talks[0].min;
    const morningTalkDuration = 0;
    const afternoonTalkDuration = 0;

    // set time and return morning talks
    const morningTalks =
      setTimeForMorningTalks(track.talks, trackDuration, morningTalkDuration);

    // set time for Lunch
    morningTalks.push({ name: 'Lunch', time: '12:00 PM' });

    // get talks without time yet
    const lastTalks = track.talks.filter(talk => !talk.time);

    // set time and return afternoon talks
    const afternoonTalks =
      setTimeForAfternoonTalks(lastTalks, trackDuration, afternoonTalkDuration);

    // set time for Networking Event
    afternoonTalks.push({ name: 'Networking Event', time: '5:00 PM' });

    // set morning and afternoon talks in your track
    track.talks = morningTalks.concat(afternoonTalks);

    return track;
  });
}
