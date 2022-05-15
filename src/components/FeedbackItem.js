import {useState} from 'react'
import{FaTimes} from 'react-icons/fa'
import Card from './shared/Card';

export default function FeedbackItem(props) {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState("This is an item");
  // defining the handel click
  return (
     <Card>
      <div className='num-display'>{props.id}</div>
      <button onClick={()=>props.handelDelete(props.id)} className='close'>
      <FaTimes color='black'/>
      </button>
      <div className='text-display'>{props.text}</div>
    </Card>
   
  )
}
