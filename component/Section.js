import style from "../styles/Section.module.css"
import Searchform from "../component/Searchform"
import Login from "../component/login"
import Intro from "../component/intro"
import {useState,useEffect} from "react"

export default function Section({event}) {
    const images=[
        "home-background-1.jpg",
        "home-background-2.jpg"
    ]

    const [count,setCount]=useState(0);

    useEffect(()=>{
        let id=setInterval(()=>{
            setCount(count=>count+1)
        },10000)
        return ()=>clearInterval(id)
    },[])

    const [content,setcontent] = useState(true)
    const handleClick = () => {
        setcontent(content => !content);
      };

    const p=[<>Denmark is a member of the European Union with a<br/>
    highly developed economy and a typical welfare<br/>
    state with a very small gap between the rich and <br/>
    the poor.It is a highly developed country in the world</>,
    <>The Republic of Finland, commonly known as Finland,<br/>
    is one of the countries that make up northern Europe.<br/>
    It consists of about 19 7 administrative regions including<br/>
    309 municipalities in Finland and more than 19,000 regions,<br/>
    with a territorial area of ​​338,000. "There are about 18 thousand<br/>
    lakes, so there are about 18 countries".</>]
    const title=["Denmark","Finland"]
  
    return(
        <>
                <div className={style.herocontainer}>
                    <img className={style.background} src={images[(count%2)]} alt='alter'/>
                    <h1>Rent You on Sunday</h1>
                    
                    <Login/>
                    <Searchform/>
                    <button className={`${style.button} ${style.scrollindicator}`} onClick={handleClick} >
                        <span className={style.scrollindicatorlabel}>introduction</span> 
                        <div className={style.scrollindicatorline}></div>
                    </button>
                    <div className={style.mask}></div>

                    <Intro title={title[count%2]} content={p[(count%2)]} number={content}/>
            </div>
        </>
    )
}