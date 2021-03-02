import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data);
  return <main>
    <div className='container'>
      <h3>Questions and Answers About Login</h3>
      <section className='info'>
        {questions.map((item) => {
          return <SingleQuestion key={questions.id} {...item} />
        })}
      </section>
    </div>
    </main>;
}

export default App;
