
import { useState,useRef } from 'react'


export default function matheStudy(){
	const [ state,setstate ] = useState([2,3,4,2])
	const [ stateNum,setstateNum ] = useState([])
	const changeNum = () => {
		let listNum = [0,1,2,3,4,5,6,7,8,9]
		let realNum= []
		for(let i=0;i<4;i++){
			let datanum = Math.floor(Math.random()*10)
			realNum.push(listNum[datanum])
		}
		setstate(realNum)
	}
	const inputValue = useRef(null)

	const getInput = () =>{
		let sortNum = inputValue.current.value
		const data = sortNum.split(',')
		const newdata = []
		data.map(item =>{
			newdata.push(parseInt(item))
		})
		removeTheSameData(newdata)
		
	}
	const removeTheSameData = (data) => {
		let setdata = new Set()
		let listdata = []
		for (let i=0;i<data.length;i++){
			if(!setdata.has(data[i])){
				setdata.add(data[i])
				listdata.push(data[i])
			}
		}
		sortNumfun(listdata)
	}
	const sortNumfun = (data) =>{
		for(let i=0;i<data.length;i++){
			for(let j=0;j<data.length-i-1;j++){
				if(data[j]<data[j+1]){
					[data[j],data[j+1]]=[data[j+1],data[j]]
				}
			}
		}
		setstateNum(data)
	}
	return (
		<>
			<button onClick={changeNum}>randoming num by you change</button>
			<div className='m-8'>{state}</div>
			<input placeholder="enter array" type="text" ref={inputValue}/>
			<button onClick={getInput}>click get input value</button>
			<div className="m-8">{stateNum}</div>
		</>)
}
