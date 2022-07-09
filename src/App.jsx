import React, {useState, useEffect, useMemo} from 'react';
import './app.css';
import Quiz from './components/Quiz';
import Timer from './components/Timer';
import Start from './components/Start';



function App() {
  const [userName, setUserName] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState('$ 0')

  const data = [

    {
      id:1,
      question: "Nigeria has the flag color of ____ and white",
      answers:[
        {
          text: "blue",
          correct: false,
        },
        {
          text: "pink",
          correct: false,
        },
        {
          text: "green",
          correct: true,
        },
        {
          text: "yellow",
          correct: false, 
        }
      ]
    }, 
    {
      id:2,
      question: "Nigeria gain independent in which year?",
      answers:[
        {
          text: "1961",
          correct: false,
        },
        {
          text: "2021",
          correct: false,
        },
        {
          text: "2022",
          correct: false,
        },
        {
          text: "1960",
          correct: true, 
        }
      ]
    },
    {
      id:3,
      question: "How many continent do we have in the world?",
      answers:[
        {
          text: "5",
          correct: false,
        },
        {
          text: "7",
          correct: true,
        },
        {
          text: "2",
          correct: false,
        },
        {
          text: "1",
          correct: false, 
        }
      ]
    }
  ]
  
  const moneyPyramid = useMemo(()=>

    [

      {id:1, amount: "$ 100"},
      {id:2, amount: "$ 200"},
      {id:3, amount: "$ 300"},
      {id:4, amount: "$ 500"},
      {id:5, amount: "$ 1000"},
      {id:6, amount: "$ 2000"},
      {id:7, amount: "$ 4000"},
      {id:8, amount: "$ 8000"},
      {id:9, amount: "$ 16000"},
      {id:10, amount: "$ 32000"},
      {id:11, amount: "$ 64000"},
      {id:12, amount: "$ 125000"},
      {id:13, amount: "$ 250000"},
      {id:14, amount: "$ 500000"},
      {id:15, amount: "$ 1000000"}
    ].reverse(),

  [])

useEffect(()=> {
  questionNumber > 1 && setEarned(moneyPyramid.find(m=>m.id === questionNumber -1).amount)
}, [moneyPyramid, questionNumber])

  return (
    <div className="app">
    {userName ? (
      <>
      <div className="main">
            {stop ? (<h1 className='endText'>You Earned: {earned} </h1>
             ):(
  <>
  <div className="top">

<div className="timer"><Timer setStop={setStop} questionNumber={questionNumber} /></div>
</div>
<div className="bottom"><Quiz  data={data} setStop={setStop} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber}/></div>
</>
)}
        </div>
      <div className="pyramid">
      <ul className='moneyList'>
      
      {moneyPyramid.map((m) => (
        <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
      <span className='moneyListItemNumber'>{m.id}</span>
      <span className='moneyListItemAmount'>{m.amount}</span>
      </li>

      ))}

     
      </ul>
      </div>
      
      
      </>


    ) : <Start setUserName={setUserName}/>}
    
      
      
    </div>
  );
}

export default App;
