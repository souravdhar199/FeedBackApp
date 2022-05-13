import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import FeedbackList from './components/FeedbackList';
import Feedbackdata from './data/Feedbackdata';
import { useState } from 'react';

function App() {
  const [feedback, setFeedback] = useState(Feedbackdata);
  console.log(feedback);
  return (
    <>
    <Header text="App"/ >
      <div className='container'>
      <FeedbackList data={feedback}/>
      </div>
    
    </>
    
  );
}

export default App;
