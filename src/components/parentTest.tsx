import { createContext,useState } from 'react'

import Login from './login'

import User from './user'

export const Appcontent = createContext(null)

const testData = () =>{

	const [state,setstate]=useState("")

	return (
	
		<Appcontent.Provider value={{state, setstate }}>
			<Login /> <User  />
		</Appcontent.Provider>

	)

}

export default testData