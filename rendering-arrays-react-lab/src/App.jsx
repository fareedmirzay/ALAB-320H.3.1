import React, { useState } from 'react';
import Learner from './components/Learner.jsx';
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [learnerData, setLearnerData] = useState({
    learners: [
      {
        name: 'Cait Yomorta',
        bio: 'Lorem ipsum...',
        scores: [
          { date: '2018-02-08', score: 77 },
          { date: '2018-04-22', score: 92 },
          { date: '2018-09-15', score: 68 },
        ],
      },
      {
        name: 'Holly Baird',
        bio: 'Eum molestiae...',
        scores: [
          { date: '2018-12-14', score: 88 },
          { date: '2019-01-09', score: 79 },
          { date: '2019-02-23', score: 91 },
          { date: '2019-03-01', score: 95 },
        ],
      },
      {
        name: 'Wes Mungia',
        bio: 'Repudiandae veritatis...',
        scores: [
          { date: '2018-10-11', score: 62 },
          { date: '2018-11-24', score: 74 },
          { date: '2018-12-19', score: 85 },
        ],
      },
    ],
  });

  return (
    <div>
      <h1>Learner Data</h1>
      {learnerData.learners.map((learner, index) => (
        <Learner key={index} learner={learner} />
      ))}
    </div>
  );
}

export default App;