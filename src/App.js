
import './App.css';
import Question from './component/Question';
import {useState,useEffect} from "react";
import axios from "axios";

import { Jumbotron, Button } from 'reactstrap';
import { Spinner } from 'reactstrap'

 
function App() {

  const [questions,setQuestions] = useState(null);
  const [count,setCount] = useState(0);
  const [finish,setFinish] = useState(false);
  
  const [score,setScore] = useState(0);
  

  const getQuestions=()=>{
       axios.get("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple")
       .then((res)=>setQuestions(res.data.results))
       .catch((error)=> console.log(error));
  }


  useEffect(() => {
    
    console.log("useEffect");
    
    getQuestions();
    
    
  }, []);

  const nextQuestion=(cAns)=>{

     if(cAns===questions[count].correct_answer){
                  setScore(score+10);
     }

     if(count>=9){
                 setFinish(true);
     }
     else{
      setCount((count+1)%10);
     }
     


  }

  if(finish){
              
    return(
           
      <div className="text-center " style={{ backgroundColor: 'grey' ,height:"100vh",margin:"0px",padding:"0px"}}>
      <Jumbotron className="container " style={{position:"relative",top:"100px",border:"2px 3px 5px"}} >
    <h1 className="display-3 text-success">{`Result = `+score}</h1>
      </Jumbotron>
    </div>

    )

  }
  if(!questions){
        return (
      <div className="text-center pt-5" style={{ backgroundColor: 'grey' ,height:"100vh",margin:"0px",padding:"0px"}}>
            <h1> No questions </h1>
            <div>
      <Spinner type="grow" color="primary" />
      <Spinner type="grow" color="secondary" />
      <Spinner type="grow" color="success" />
      <Spinner type="grow" color="danger" />
      <Spinner type="grow" color="warning" />
      <Spinner type="grow" color="info" />
      <Spinner type="grow" color="light" />
      <Spinner type="grow" color="dark" />
    </div>
            </div>
          
        )
  }
  else{
    var a = questions[count].incorrect_answers.sort(()=>Math.random()-0.5);
    a=[...a,questions[count].correct_answer].sort(()=>Math.random()-0.5);
    
    return (

    <div className="text-center" style={{ backgroundColor: 'grey' ,height:"100vh",margin:"0px",padding:"0px"}}> 
        
        <Question q={questions[count]} a={a} nextQ={nextQuestion} cAnss={""}/>
        
    </div>
  )
  }
}

export default App;
