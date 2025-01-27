const generateRandomAge = () => Math.floor(Math.random() * 100);
const getMessageByAge = (age) => {
  if (age <= 5) return 'Де твоя мама, чому ти на Твічі?';
  if (age <= 17) return 'Йди роби домашнє завдання!';
  if (age <= 30) return 'Самий час насолоджуватися стрімами!';
  if (age <= 50) return 'Твій досвід допоможе всім у чаті!';
  return 'Старість — не перешкода для стрімів!';
};

const ageHandler = async (req, res) => {
  try {
    const [age, message] = await Promise.all([
      generateRandomAgeAsync(),
      getMessageByAgeAsync(),
    ]);

    const fullMessage = `тобі ${age}. ${message}`;

    res.json({ fullMessage });
  } catch (error) {
    res.status(500).json({ error: 'Щось пішло не так!' });
  }
};

module.exports = ageHandler;
