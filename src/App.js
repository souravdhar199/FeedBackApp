import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import FeedbackList from './components/FeedbackList';
import Feedbackdata from './data/Feedbackdata';
import FeedbackStats from './components/FeedbackStats';
import Feedbackform from './components/Feedbackform';
import { useState } from 'react';

function App() {
  const [feedback, setFeedback] = useState(Feedbackdata);
  const remove = (id)=>{
    setFeedback(feedback.filter((item)=>item.id!=id));
    console.log(id);
  }

  return (
    <>
    <Header text="App"/ >
      <div className='container'>
        <Feedbackform/>
      <FeedbackStats data={feedback}/>
      <FeedbackList data={feedback} deletes={remove}/>
      </div>
    
    </>   
  );
}

export default App;
