import {
  readContentFile, contentFileToArray, printOutput,
} from './utils/file-input';
import calcNumberOfTracks from './controllers/tracks';

export default () => {
  readContentFile()
    .then(fileContent => contentFileToArray(fileContent))
    .then(arrayOfTalks => calcNumberOfTracks(arrayOfTalks))
    .then(numberOfTracks => printOutput(numberOfTracks));
};
