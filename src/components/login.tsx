
import { useContext } from 'react'

import {Appcontent} from './parentTest'



export default function login(){
	const { setstate } = useContext(Appcontent)
	return <input onChange={(event)=>{setstate(event.target.value)}}/>
}