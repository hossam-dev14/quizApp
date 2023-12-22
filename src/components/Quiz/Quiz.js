import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import Header from '../Header/Header.js';
import Result from '../Result/Result.js';
// import data from '../data.json';
import './Quiz.css';


export function Quiz(){

  const [quize, setQuize] = useState();
  const [quationNum, setQuationNum] = useState(1);
  const [score, setScore] = useState(0);
  const [backgroundColor, setBgColor] = useState("");

  const bgColorChange = () => {
    const newBgColor = 'blue';
    setBgColor(newBgColor);
  }

  // Load JSON Data
  useEffect(() => {
    fetch('quiz.json')
      .then(res => res.json())
      .then(data => setQuize(data))
  }, []);

  // const scoreAdd = () => {
  //   setScore + 1
  // }


  // Using props
  // set background for button
  

  // const switchQuation = () => (quationNum <= 10 ) ? quationNum + 1 : quationNum;

  return (
    <Fragment>
      <Header />
      <div>
        <div className='score m_top_bottom p_right_left'>
          <div>Quation {quationNum} of 10</div>
          <h1>{score}</h1>
        </div> 
          {quationNum <= 10 ? (data.map((elm,i) => (
            quationNum === elm.id) ?
            <div key={i}>
              <div className='quation m_top_bottom p_right_left'>
                  <h3>{elm.quation}</h3>
              </div>
              <div className='options'>
                <div key={elm.id}>
                  {elm.options.map((el,i) =>
                    <button 
                      key={el.ans}
                      className='answer'
                      style={{ backgroundColor }}
                      onClick={(e) => (
                        (e.target.value === elm.correctAnswer) ? 
                          bgColorChange() : ''
                        )
                      }>
                      {el.value}</button>
                  )}
                </div>
              </div>
            </div> : ''
            )) : <Result />
          }

        <div className='nextBtn'>
          <button
            className='btnNext' 
            onClick={() => setQuationNum(() => (
              (quationNum <= 10) ? 
                quationNum + 1 : 
                quationNum )
            )
            }>
            Next Quation
          </button>
        </div>
      </div>

    </Fragment>
  );
}


// e.target.value === elm.correctAnswer ?
// score + 1 : score 

// function Quations() { 

//   const [quationNum, setQuationNum] = useState(0);

//   const switchQuation = () => (quationNum < 10 ) ? quationNum + 1 : quationNum;

//   return (
    
//     )
// }





