import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import List from '../components/list'

import Link from 'next/link'

export default function Home({listdatas}) {
  return <List  listdatas={listdatas}/>
}

export async function getStaticProps(){
 const data = await fetch('http://localhost:5000/sourceDict')
 const listdata = await data.json()
 const listdatas= listdata.resultData
 return {
   props:{
     listdatas
   }
 }
}