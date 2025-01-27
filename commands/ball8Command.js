const getFortuneAnswer = () => {
  const answers = [
    'Так, зорі сходять на твою користь!',
    'Ні, таємниці не будуть розкриті цього разу.',
    'Не знаю, запитай ще раз, коли Місяць буде в іншій фазі.',
    'Відповідь туманна, лише час покаже, що буде далі.',
    'Абсолютно! Це твій шлях, вір у нього.',
    'Можливо, але доля залишає сумніви.',
    'Так, без сумніву, твої зусилля принесуть плоди!',
    'Здається, що ні, але доля може змінитися.',
    'Весьма ймовірно, але не забувай про обережність.',
    'Не раджу покладатися на це, бо темні хмари над горизонтом.',
  ];

  const randomIndex = Math.floor(Math.random() * answers.length);
  return answers[randomIndex];
};

const ball8Handler = (req, res) => {
  const question = req.query.question;
  console.log(question);

  if (!question) {
    return res.json({
      message: 'Без питання не бути ворожбі!',
    });
  }

  const answer = getFortuneAnswer();

  res.json({
    question: question,
    answer: answer,
  });
};

module.exports = ball8Handler;
