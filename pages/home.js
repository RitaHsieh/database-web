import Link from 'next/link'
import "./index.js" 
import "../styles/home.css"
import {useState,useEffect} from 'react'

export default function Home() {

  const [number,setNumber] = useState(0)

  return (
    <>
      <div className='container'>
        Hello World {number}. <Link href="/hi">About</Link>
      <Index/>
      <button onClick={(e)=>setNumber(number+=1)}></button>
      </div>
      <div></div>
    </>
  )
}