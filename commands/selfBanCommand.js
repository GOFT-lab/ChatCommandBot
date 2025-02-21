const seflBanCommand = '/timeout';

const selfBanHandler = (req, res) => {
  const answer = selfBanCommand();

  res.json({
    answer: answer,
  });
};

module.exports = selfBanHandler;
