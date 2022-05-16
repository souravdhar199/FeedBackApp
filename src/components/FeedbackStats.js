export default function FeedbackStats({data}) {
  let sum = 0;
  {data.map((item)=>sum=sum+item.id)}
  let average = sum/data.length;
  average = average.toFixed(1);
  return (
    <div className="feedback-stats">
      <h4>The size is {data.length}</h4>
      <h4>Average is {isNaN(average)?0 : average} </h4>
      </div>
  )
}

