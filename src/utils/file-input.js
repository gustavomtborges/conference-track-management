import fs from 'fs';

export function readContentFile() {
  if (process.argv.length < 3) {
    process.exit(1);
  }
  return new Promise((resolve, reject) => {
    try {
      return resolve(fs.readFileSync(process.argv[2], 'utf-8'));
    } catch (err) {
      return reject('Error on read your-input.txt\n\nPlease verify if you are typing the correct name and path.\n\n');
    }
  });
}

export function contentFileToArray(content) {
  return content.split(/\n/).filter(value => value);
}

export function formatOutput(result) {
  const formatedResult = result.map((track) => {
    const tracksFormated =
      `\nTrack${track.number}:\n`;

    const talksFormated = track.talks.map(talk =>
      `\n${talk.name}\n`).join('');

    return (tracksFormated + talksFormated);
  });
  return formatedResult.join('');
}


export function printOutput(formatedResult) {
  process.stdout.write(`${formatedResult}\n`);
}
