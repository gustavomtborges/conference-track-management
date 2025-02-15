import fs from 'fs';
import {
  readContentFile,
  formatOutput, contentFileToArray,
} from '../../../src/utils/file-input';

describe('Utils: file-input:', () => {
  describe('readContentFile():', () => {
    const fileContent =
      'Writing Fast Tests Against Enterprise Rails 60min\n' +
      'Overdoing it in Python 45min\n';

    it('Should read the content of input.txt file', (done) => {
      fs.readFileSync = sinon.stub();
      fs.readFileSync.withArgs(process.argv[2], 'utf-8')
        .returns(fileContent);

      Promise.resolve = sinon.stub();
      Promise.resolve.resolves(fileContent);

      readContentFile()
        .then((result) => {
          expect(result).to.be.eql(fileContent);
          done();
        });
    });

    it('Should return a error message if couldn\'t read input.txt', (done) => {
      fs.readFileSync = sinon.stub();
      fs.readFileSync.withArgs('input.tx', 'utf-8')
        .returns(Error);

      Promise.reject = sinon.stub();
      Promise.reject.rejects('Error on read your-input.txt\n\nPlease verify if you are typing the correct name and path.\n\n');

      readContentFile()
        .then().catch((err) => {
          expect(err).to.be.eql('Error on read your-input.txt\n\nPlease verify if you are typing the correct name and path.\n\n');
        }).then(() => done());
    });
  });

  describe('contentToArray():', () => {
    it('Should convert input content to an array', () => {
      const content = 'Writing Fast Tests Against Enterprise Rails 60min\n' +
        'Overdoing it in Python 45min';

      const arrayOfTalks = [
        'Writing Fast Tests Against Enterprise Rails 60min',
        'Overdoing it in Python 45min',
      ];

      expect(contentFileToArray(content)).to.be.eql(arrayOfTalks);
    });
  });

  describe('formatOutput():', () => {
    it('Should format result output', () => {
      const result = [{
        number: 1,
        talks: [
          {
            min: 60,
            time: '9:00 AM',
            name: 'Writing Fast Tests Against Enterprise Rails 60min',
          }],
      }, {
        number: 2,
        talks: [
          {
            min: 45,
            time: '10:00 AM',
            name: 'Overdoing it in Python 45min',
          }],
      }];

      const formatedResult =
        '\nTrack1:\n\n9:00 AM Writing Fast Tests Against Enterprise Rails 60min\n' +
        '\nTrack2:\n\n10:00 AM Overdoing it in Python 45min\n';

      expect(formatOutput(result)).to.be.eql(formatedResult);
    });
  });
});
