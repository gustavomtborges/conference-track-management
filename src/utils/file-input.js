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

export function contentFileToArray(content) {
  return content.split(/\n/).filter(value => value);
}

export function formatOutput(result) {
  const fakeResult = [{
    number: 1,
    talks: [
      {
        hour: '9:00AM',
        name: 'Writing Fast Tests Against Enterprise Rails 60min',
      }],
  }, {
    number: 2,
    talks: [
      {
        hour: '9:00AM',
        name: 'Writing Fast Tests Against Enterprise Rails 60min',
      }],
  }];

  const formatedResult = fakeResult.map((track) => {
    const traksFormated = `\nTrack${track.number}:\n`;

    const talksFormated = track.talks.map(talk =>
      `\n${talk.hour} ${talk.name}\n`).join().replace(',', '');

    return traksFormated + talksFormated;
  });

  return formatedResult.join().replace(',', '');
}


export function printOutput(result) {
  process.stdout.write(`${result} \n`);
}
