const tape = require('tape');

const test1 = tape('initial test ', (t) => {
  t.equal(1, 1, '1 should be 1');
  t.end();
});

module.exports = {
  test1,
};
