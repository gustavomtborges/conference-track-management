import fs from 'fs';

export function readContentFile() {
  if (process.argv.length < 3) {
    process.exit(1);
  }
  return new Promise((resolve, reject) => {
    try {
      return resolve(fs.readFileSync(process.argv[2], 'utf-8'));
    } catch (err) {
      return reject('error on read input.txt');
    }
  });
}

export function formatOutput(result) {
  return new Promise((resolve) => {
    const formatedResult = `${result}`;
    resolve(formatedResult);
  });
}

export function printOutput(result) {
  process.stdout.write(`${result}\n`);
}

export default () => {
  readContentFile()
    .then(fileContent => formatOutput(fileContent))
    .then(formatedResult => printOutput(formatedResult));
};
