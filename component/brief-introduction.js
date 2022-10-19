import Link from 'next/link'
import "../pages/index.js" 
import style from "../styles/brief-introduction.module.css"
import {useState,useEffect} from 'react'

export default function Briefintroduction(props) {

  const [number,setNumber] = useState(0)

 

  return (
    <div className={style.container}>
      <img src="/image.jpg" alt='asd'/>
      <div className={style.beforeintro}><p>{props.beforeintro}</p></div>
      <div className={`${style.after} ${style.name}`}><h1>{props.name}</h1></div>
      <div className={`${style.after} ${style.intro}`}><p>{props.intro}</p></div>
      <div className={`${style.after} ${style.addr}`}><p>{props.addr}</p></div>
      <div className={`${style.after} ${style.price}`}><p>{props.price}</p></div>
      <div className={`${style.after} ${style.btn}`}><button className={style.button}>更多資訊</button></div>
    </div>
  )
}