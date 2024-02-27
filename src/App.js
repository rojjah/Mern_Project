import React, { useState } from 'react'
const App = () => {
  const questions = [
		{
			questionText: 'What does HTML stand for? ',
			answerOptions: [
				{ answerText: 'HigherText Markup Language', isCorrect: false },
				{ answerText: 'Hyper Text Marking Language', isCorrect: false },
				{ answerText: 'Hyper Text Markup Language', isCorrect: true },
				{ answerText: 'Hyperlinks and Text Markup Language', isCorrect: false },
			],
		},
		{
			questionText: 'Does the HTML above trigger a http request when the page first loads?',
			answerOptions: [
				{ answerText: 'No', isCorrect: false },
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'Sometimes', isCorrect: false },
				{ answerText: 'Only when working with JS', isCorrect: false },
			],
		},
		{
			questionText: 'Is < keygen > a valid HTML5 tag?  ',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'It is not closed', isCorrect: false },
				{ answerText: 'No', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'Javascript and CSS are used to add functionality to our webpage?',
			answerOptions: [
				{ answerText: 'False', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
				{ answerText: 'They both add styling', isCorrect: false },
				{ answerText: 'True', isCorrect: true },
			],
		},
    {
			questionText: 'Javascript and CSS are used to add functionality to our webpage?',
			answerOptions: [
				{ answerText: 'False', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
				{ answerText: 'They both add styling', isCorrect: false },
				{ answerText: 'True', isCorrect: true },
			],
		},
    {
			questionText: 'Javascript and CSS are used to add functionality to our webpage?',
			answerOptions: [
				{ answerText: 'False', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
				{ answerText: 'They both add styling', isCorrect: false },
				{ answerText: 'True', isCorrect: true },
			],
		},
    {
			questionText: 'Javascript and CSS are used to add functionality to our webpage?',
			answerOptions: [
				{ answerText: 'False', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
				{ answerText: 'They both add styling', isCorrect: false },
				{ answerText: 'True', isCorrect: true },
			],
		},
    {
			questionText: 'Javascript and CSS are used to add functionality to our webpage?',
			answerOptions: [
				{ answerText: 'False', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
				{ answerText: 'They both add styling', isCorrect: false },
				{ answerText: 'True', isCorrect: true },
			],
		},
    {
			questionText: 'Javascript and CSS are used to add functionality to our webpage?',
			answerOptions: [
				{ answerText: 'False', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
				{ answerText: 'They both add styling', isCorrect: false },
				{ answerText: 'True', isCorrect: true },
			],
		},
    {
			questionText: 'Javascript and CSS are used to add functionality to our webpage?',
			answerOptions: [
				{ answerText: 'False', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
				{ answerText: 'They both add styling', isCorrect: false },
				{ answerText: 'True', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
  return (
      		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
  )
}

export default App
