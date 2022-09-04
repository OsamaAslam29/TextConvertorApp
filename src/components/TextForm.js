import React, {useState} from 'react'

export default function TextForm(props) {

  
  const handleUpText =()=> {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase!","success")
  }
  const handleLoText =()=> {
    let newtext = text.toLocaleLowerCase();
    setText(newtext);
    props.showAlert("Converted to LowerCase!","success")
  }
  const handleClearText =()=> {
    let newtext = '';
    setText(newtext);
    props.showAlert("Text Cleared!","success")
  }
  const handleCaText =()=> {
        
      let firstchar = text.charAt(0); // storing the first char of the string
      let newText= firstchar.toUpperCase(); // converting that to uppercase
      setText(newText+text.slice(1)); // printing it with rest excluding the first char by using slice
      props.showAlert("Capitalize First Letter!","success")
      }
  const handleCoText =()=> {
        
      // let text =document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Text Copied!","success")

  }
 
  const handleSpText =()=> {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    
  }
 
 
  
  const handleOnChange =(event)=> {
    setText(event.target.value)
    
  }
  const [text, setText] = useState('');  
    // text="osama"; worng way
    // setText("This is right way");
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'light'}}>
      <div className="height"></div>
          <h1 >{props.heading}</h1>
                  <div className="mb-3">
            <div className="height"></div>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#c7b7b7':'white',color:'black'}} id="myBox"  rows="10"></textarea>
          </div>
          <div className="btn btn-primary mx-3 my-1" onClick={handleUpText}> Convert to UpperCase</div>
          <div className="btn btn-primary mx-3 my-1" onClick={handleLoText}> Convert to LowerCase</div>
          <div className="btn btn-primary mx-3 my-1" onClick={handleCaText}>Capital First Letter</div>
          <div className="btn btn-primary mx-3 my-1" onClick={handleCoText}>Copy Text</div>
          <div className="btn btn-primary mx-3 my-1" onClick={handleSpText}>Speak Text</div>
          <div className="btn btn-primary mx-3 my-1" onClick={handleClearText}>Clear Text</div>

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Words and Characters Counter</h2>
             <p>  { text.split(/\s+/).filter((element)=>{return element.length!==0}).length}  Words And {text.length} Character </p>
             <p>  { 0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } Time Required to read </p>
 
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing To Preview"}</p>

    </div>
    </>
  )
}
