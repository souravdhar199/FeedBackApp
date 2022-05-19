import Card from "./shared/Card"
import Button from "./shared/Button";
import Rating from "./Rating";
import { useState } from "react"
export default function Feedbackform({newData}) {
  const [text, setText] = useState('');
  const[rating, setRating] = useState();
  const [disables, setDisable] = useState(true);
  const [flash, setFlash] = useState('');
  const handleTextchange= (e)=>{
    if(text ===''){
      setDisable(true);
      setFlash(null);
    }
    else if(text!=='' && text.trim().length<=10){
      setFlash('Please type 10 chars');
      setDisable(true);
    }
    else{
      setDisable(false);
      setFlash(null);
    }
    setText(e.target.value);
  }

  const pleaseSubmit = (e)=>{
    e.preventDefault();
   const k = {
     id: rating,
     text: text,
   }

   newData(k);
    
  }


  return (
   <Card>
     <Rating picked={(n)=> setRating(n)}/>
     <form onSubmit={pleaseSubmit}> 
     <h2>Please type the rating</h2>
     <div className="input-group">
      <input onChange={handleTextchange} type="text" placeholder="Write a review" value={text}/>

      <Button type="submit" isDisables={disables}>Send</Button>
     
     </div>
     {flash && <div className="message">{flash}</div>}
     </form>
   </Card>
  )
}
