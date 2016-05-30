var createHashHistory = require('history/lib/createHashHistory');
var history = createHashHistory({
  queryKey: false
});

module.exports = history;
