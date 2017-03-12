import {
  readContentFile, contentFileToArray, printOutput,
} from './utils/file-utils';

export default () => {
  readContentFile()
    .then(fileContent => contentFileToArray(fileContent))
    .then(arrayOfTalks => printOutput(arrayOfTalks));
};
