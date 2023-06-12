import {useState,forwardRef,useImperativeHandle} from 'react'

const subtext = forwardRef((props,ref) => {
	const [state,setstate]= useState(true)

	useImperativeHandle(ref,()=>({
		clicksub(){
			setstate(!state)
		}
	}))
	

	return (
		<div>
			<button>click sub</button>
			{state && <div className="text-red-100">this is sub component</div>}
		</div>

		)
})


export default subtext