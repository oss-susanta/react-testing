import {success, error, callback} from './02_async';

describe('success', () => {
  test('using promises', () => {
    expect.assertions(1);
    return success('Jest').then(output => {
      expect(output).toEqual('Hi, Jest...');
    });
  });

  test('using async-await', async () => {
    expect.assertions(1);
    const output = await success('Jest');
    expect(output).toEqual('Hi, Jest...');
  });

  test('using matchers', () => {
    expect.assertions(1);
    expect(success('Jest')).resolves.toEqual('Hi, Jest...');
  });
});

describe('error', () => {
  test('using promises', () => {
    expect.assertions(1);
    return error('Jest').catch(output => {
      expect(output).toEqual('Bye, Jest...');
    });
  });

  test('using async-await', async () => {
    expect.assertions(1);
    try {
      await error('Jest');
    } catch(output) {
      expect(output).toEqual('Bye, Jest...');
    }
  });

  test('error', () => {
    expect.assertions(1);
    expect(error('Jest')).rejects.toEqual('Bye, Jest...');
  });
});

test('callback', done => {
  expect.assertions(1);
  callback('Jest', output => {
    expect(output).toEqual('Hi, Jest...');
    done();
  });
});
