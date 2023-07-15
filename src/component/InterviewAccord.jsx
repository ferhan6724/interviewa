import questions from "../helper/data"
import Question from "./Question";

 


const InterviewAccord = () => {
console.log(questions);
  return (
    <div>InterviewAccord
    {
        questions.map((questions,id)=>(<Question key={id} {...questions}/>))
    }
    </div>

    
  )
}

export default InterviewAccord