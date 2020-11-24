import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import '.././App.css';

function Answer({a,setAns}) {

    const selectedAns=(e)=>{
      var a =document.getElementById("myDIV").children;
      console.log(a);
      for (var i = 0; i < a.length; i++) {
        a[i].style.backgroundColor='white';
    }
      
    
      e.target.style.backgroundColor='lightgreen';
    }

    return (
        <div >
    <ListGroup id="myDIV">
    <ListGroupItem  onMouseUp={(e)=>selectedAns(e)}  tag="button" action dangerouslySetInnerHTML={{__html:a[0]}} onClick={(e)=>{setAns(e.target.outerText)
    }}></ListGroupItem>
      <ListGroupItem  onMouseUp={(e)=>selectedAns(e)} tag="button" action dangerouslySetInnerHTML={{__html:a[1]} } onClick={(e)=>{setAns(e.target.outerText);
           
    }}></ListGroupItem>
      
      <ListGroupItem  onMouseUp={(e)=>selectedAns(e)} tag="button" action dangerouslySetInnerHTML={{__html:a[2]}}  onClick={(e)=>{setAns(e.target.outerText)
    }}></ListGroupItem>
      
      <ListGroupItem  onMouseUp={(e)=>selectedAns(e)} tag="button" action dangerouslySetInnerHTML={{__html:a[3]}}  onClick={(e)=>{setAns(e.target.outerText)
    }}></ListGroupItem>
      
    </ListGroup>
        </div>
    )
}

export default Answer;
