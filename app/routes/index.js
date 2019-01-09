
module.exports = (app) => {
  require('./bot')(app);
  require('./swagger')(app);
};
