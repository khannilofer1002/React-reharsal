import React,{useState} from 'react'


export default function TextForm(props) {
  const[text,setText]=useState('Enter Text here')
  const handleUpClick=()=>{
    console.log("buttoclicked")
    let newText= text.toUpperCase()
    setText(newText)
    props.showAlert("converted to upper case","success")
  }
  const handleLowerClick=()=>{
    console.log("buttoclicked")
    let newText= text.toLowerCase()
    setText(newText)
    props.showAlert("converted to lower case","success")
  }
  const handleOnChange=(event)=>{
    console.log("TextChanged")
    setText(event.target.value)
  }
  const handleClearClick=()=>{
    let newText = "";
    setText(newText)
    props.showAlert("Text clear successfully","success")
  }
  const handleCopy=()=>{
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text copied successfully","success")
  }
  const handleExtraSpace=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(""))
    props.showAlert("Extra spaces removed","success")
  }
  return (
    <>
    <div style={{color:props.mode ==="dark"? "white":"black"}} className='conatiner'>
 <h1 >{props.heading}</h1>    
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{background:props.mode ==="dark"? "#222e4f":"white",color:props.mode ==="dark"? "white":"black"}}></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary my=4" onClick={handleLowerClick}>Convert to LowerCase</button>
<button className="btn btn-primary my=4" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary my=4" onClick={handleExtraSpace}>Clear Space</button>
<button className="btn btn-primary my=4" onClick={handleClearClick}>Clear Text</button>

    </div>
    <div style={{color:props.mode ==="dark"? "white":"black"}} className="conatiner">
      <h1>Your Text Summury</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
    </div>
    <h2 style={{color:props.mode ==="dark"? "white":"black"}}>Preview</h2>
    <p style={{color:props.mode ==="dark"? "white":"black"}}>{text}</p>
    </>
  )
}
