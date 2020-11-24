import React from 'react'

import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import Answer from './Answer';
import {useState} from "react";


function Question({q,a,nextQ}) {

      const [cAns,setAns] = useState("");
    return (

        <div className="container" style={{padding:"100px"}}>
      <Card>
        
        <CardBody>
          <CardTitle tag="h1">Welcome To Quiz World</CardTitle>
          
      <CardText tag="h5" action dangerouslySetInnerHTML={{__html:q.question}}></CardText>
          <Answer a={a} setAns={(cAns)=>setAns(cAns)}/>
          <Button color="success mt-4" onClick={()=>nextQ(cAns)}>next question</Button>
        </CardBody>
      </Card>
    </div>

    )
}

export default Question
