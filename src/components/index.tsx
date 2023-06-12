import React,{ useState,useReducer,useEffect,useRef,useContext} from 'react'
//import { handler } from '../pages/api/hello.ts'
import Subtext from './subindex'
export default function bun(){

	//const  [ data, changestate ] = useState(0)
	
	//const  [ text, setToggle ] = useState(true)

	// reducer function
	interface State {
	  data: number;
	  text: boolean; 
	}
	interface Action {
	  type: string
	}
   const reducer  = (state:any,action:any) => {
   	  switch(action.type){
   	  case "increase":
   	  	return { data:state.data+1,text:state.text};
   	  case "setToggle":
   	  	return { data:state.data,text:!state.text};
   	  default:state;
   	  }
   }
   const [state,dispatch] = useReducer(reducer,{data:0,text:true})

   // useRef function
   //const innerput = useRef(null)

   const buttonRef = useRef(null)

   const submit = () =>{
   	//innerput.current.focus()
   }
   const clickit = () =>{
   	 if(buttonRef.current != null){
   	 	//buttonRef.current?.clicksub()
   	 }
   	 
   }
   // useEffect function
   useEffect(()=>{
   	 console.log('effect')
   },[])

	return (
		<div>
			<h1>{state.data}</h1>
			<div className="cursor-pointer">
				<button onClick={()=>{
					dispatch({type:"increase"});
					dispatch({type:'setToggle'});
				}}>increase</button>
			</div>
			{ state.text && <div>jime</div> }
			<div className="flex">
			<input placeholder="enter" type="text" ref={innerput}/>
			<button onClick={submit}>submit</button>
			</div>
			{/*<button onClick={clickit} className="primary">buttom from parent want use child function</button>*/}
			<Subtext ref={buttonRef}/>
		</div>
	)
}