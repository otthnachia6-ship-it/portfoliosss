import React, { useState, useEffect } from 'react';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/questions')
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch(() => setError('Imeshindikana kupata maswali. Hakikisha backend (Spring Boot) inaendesha kwenye port 8080.'));
  }, []);

  const handleSelect = (questionId, option) => {
    setAnswers({ ...answers, [questionId]: option });
  };

  const handleSubmit = () => {
    let correct = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.answer) {
        correct += 1;
      }
    });
    setScore(correct);
  };

  if (error) {
    return (
      <div>
        <h1>Quiz</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Quiz</h1>
      {questions.map((q) => (
        <div key={q.id} style={{ marginBottom: '20px' }}>
          <p><strong>{q.question}</strong></p>
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleSelect(q.id, opt)}
              style={{
                margin: '5px',
                backgroundColor: answers[q.id] === opt ? 'lightblue' : ''
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      ))}

      {questions.length > 0 && (
        <button onClick={handleSubmit}>Wasilisha Majibu</button>
      )}

      {score !== null && (
        <h2>Umepata alama {score} kati ya {questions.length}</h2>
      )}
    </div>
  );
}

export default Quiz;
