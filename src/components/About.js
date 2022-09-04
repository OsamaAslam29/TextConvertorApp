import React,{useState} from 'react'

export default function About(props) {
    

   const [myStlye, setMyStlye] = useState(  {
            color:"black",
            backgroundColor:"white"
    } );

    // const [btntext, setBtnText] = useState('Enable Dark Mode')
        
    // const toggleWord =()=>{
    //         if(myStlye.color==='white'){
    //             setMyStlye(
    //                 {
    //                     color:"black",
    //                     backgroundColor:"white",
                       
    //                 } );
    //                     setBtnText("Enable Dark Mode")     
    //                 }
    //                 else{
    //                     setMyStlye(
    //                         {
    //                             color:"white",
    //                             backgroundColor:"grey",
    //                             border:'1px solid white'
    //                     } );
    //                     setBtnText("Enable Light Mode")
    //         }
    //     }
 
    
  return (

    <div className='container'>
            <h1  style={myStlye}>About Us</h1>
        <div className="accordion" id="accordionExample" style={myStlye}>
        <div className="accordion-item" style={myStlye}>
        <h2 className="accordion-header" id="headingOne" style={myStlye}>
        <button className="accordion-button" style={myStlye} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze Your Text</strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStlye}>
            This is the first item's accordion body.It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. 
        </div>
        </div>
    </div>
    <div className="accordion-item" style={myStlye}>
        <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed"style={myStlye}type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
           <strong>Free To Use</strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body"style={myStlye}>
            This is the second item's accordion body.It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. 
        </div>
        </div>
    </div>
    <div className="accordion-item"style={myStlye}>
        <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed"style={myStlye} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser Compatible</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body"style={myStlye}>
            This is the third item's accordion body.It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
        </div>
        </div>
  </div>
  {/* <div className="container">
      <button onClick={toggleWord} className="btn btn-primary mx-3 my-3">{btntext} </button>
  </div> */}

  
</div>
    </div>
  )
}
