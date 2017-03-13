import { readContentFile, contentFileToArray, formatOutput, printOutput } from './utils/file-input';
import { splitMinuteAndNameFromTalks, sortByLargestToSmallestTalk } from './utils/array';
import { calcNumberOfTracks, pickUpTalksForATrack } from './controllers/tracks';
import setTimeForTalks from './controllers/talks';

export default () => {
  if (!process.argv[2]) {
    process.stdout.write('You need to pass your-input.txt as argument!\n\nTry $ npm start -- input.txt\n\n');
    return;
  }
  readContentFile()
    .then(fileContent => contentFileToArray(fileContent))
    .then(arrayOfTalks => splitMinuteAndNameFromTalks(arrayOfTalks))
    .then(talks => sortByLargestToSmallestTalk(talks))
    .then(sortedTalks => calcNumberOfTracks(sortedTalks))
    .then(data => pickUpTalksForATrack(data))
    .then(tracks => setTimeForTalks(tracks))
    .then(result => formatOutput(result))
    .then(formatedResult => printOutput(formatedResult))
    .catch(err => process.stdout.write(err));
};
