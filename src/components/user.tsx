import {Appcontent} from './parentTest'

import { useContext } from 'react'



export default function user(){
	const {state} = useContext(Appcontent)
	return <div>use name:{state}</div>
}