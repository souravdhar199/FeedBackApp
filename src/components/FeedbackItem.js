import {useState} from 'react'
export default function FeedbackItem(props) {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState("This is an item");
  // defining the handel click
  return (
    <div className='card'>
      <div className='num-display'>{props.id}</div>
      <div className='text-display'>{props.text}</div>
    
    </div>
  )
}
