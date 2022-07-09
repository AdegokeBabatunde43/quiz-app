
import { useState, useEffect } from 'react'
import useSound from "use-sound";
import start from '../assest/start2.mp3'
import correct from '../assest/correct1.mp3'
import wrong from '../assest/wrong2.mp3'

const Quiz = ({data, setStop, questionNumber, setQuestionNumber}) => {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState('answer');
    const[letstart]= useSound(start)
    const[wrongAnswer]= useSound(wrong)
    const[correctAnswer]= useSound(correct)

    useEffect(()=>{
      letstart()
    }, [letstart])

    useEffect(()=>{
        setQuestion(data[questionNumber - 1]);
    },[data, questionNumber])


    const delay = (duration, callback) => {
      setTimeout(()=>{
        callback();
      }, duration);
    };


    const handleClick = (a) => {
      setSelectedAnswer(a)
      setClassName('answer active')
      delay(3000, () => setClassName(a.correct ? 'answer correct' : 'answer wrong'));

      delay(5000, () => 
      {

        if (a.correct){
          correctAnswer()
          delay(1000, ()=> {
            setQuestionNumber((prev) => prev + 1)
            setSelectedAnswer(null);
          })
       
        }else{
          wrongAnswer();
          delay(1000, ()=> {
            setStop(true);
          })
         
        }
      }
      );
     
     

    }


  return (
    <div className='quiz'>
        <div className='question'>
        {question?.question}
        </div>
        <div className='answers'>
            {question?.answers.map((a)=>(
                 <div className={selectedAnswer === a ? className: 'answer'} onClick={()=> handleClick(a)}>{a.text}</div>
            ))}
        </div>

    </div>
  )
}

export default Quiz