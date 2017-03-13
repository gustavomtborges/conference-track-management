import { readContentFile, contentFileToArray, formatOutput, printOutput } from './utils/file-input';
import { splitMinuteAndNameFromTalks, sortByLargestToSmallestTalk } from './utils/array';
import { calcNumberOfTracks, pickUpTalksForTrack } from './controllers/tracks';

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
    .then(data => pickUpTalksForTrack(data))
    .then(result => formatOutput(result))
    .then(formatedResult => printOutput(formatedResult))
    .catch(err => process.stdout.write(err));
};
