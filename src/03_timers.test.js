import echo from './03_timers';

test('echo after 5 seconds', done => {
  jest.useFakeTimers();
  expect.assertions(1);
  echo('Jest', output => {
    expect(output).toEqual('Jest');
    done();
  });
  jest.runOnlyPendingTimers();
});