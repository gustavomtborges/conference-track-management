import sinon from 'sinon';
import 'sinon-as-promised';
import { expect } from 'chai';
import fs from 'fs';
import { readContentFile } from '../../src/app';

describe('App:', () => {
  describe('readContentFile():', () => {
    const fileContent =
      'Writing Fast Tests Against Enterprise Rails 60min\n' +
      'Overdoing it in Python 45minn\n';

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
      Promise.reject.rejects('error on read input.txt');

      readContentFile()
        .then().catch((err) => {
          expect(err).to.be.eql('error on read input.txt');
        }).then(() => done());
    });
  });
});
