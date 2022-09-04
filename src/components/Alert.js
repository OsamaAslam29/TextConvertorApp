import React from 'react'

export default function Alert(props) {
   
  const capatialize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
          <div className="osama" style={{height:"80px"}}>
          {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
         <strong>{capatialize(props.alert.type)}</strong> : {props.alert.msg} 
        </div>}
        </div>
  )
}
