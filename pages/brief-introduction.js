import Link from 'next/link'
import "./index.js" 
import style from "../styles/brief-introduction.module.css"
import {useState,useEffect} from 'react'

export default function Home() {

  const [number,setNumber] = useState(0)

 

  return (
    <div className={style.container}>
      <img src="/image.jpg" alt='asd'/>
      <div className={style.beforeintro}><p>旅館介紹</p></div>
      <div className={`${style.after} ${style.name}`}><h1>旅館名稱</h1></div>
      <div className={`${style.after} ${style.intro}`}><p>旅館簡介</p></div>
      <div className={`${style.after} ${style.addr}`}><p>住宿地址</p></div>
      <div className={`${style.after} ${style.price}`}><p>價格</p></div>
      <div className={`${style.after} ${style.btn}`}><button className={style.button}>更多資訊</button></div>
    </div>
  )
}