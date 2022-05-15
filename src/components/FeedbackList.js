import React from 'react'
import FeedbackItem from './FeedbackItem'

export default function FeedbackList({data, deletes}) {
  return (
  <div className="feedback-list">
{data.map((item)=>(
<FeedbackItem id={item.id} text={item.text} handelDelete={deletes}/>
))}


  </div>
  )
}
