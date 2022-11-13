import Searchform from "../component/Searchform"
import Login from "../component/login"
import Intro from "../component/intro"
import style from "../styles/home.css"
import {useState,useEffect} from "react"
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function Section({event}) {
    const [selected, setSelected] = useState();
    const [content,setcontent] = useState(true);
    const [count,setCount]=useState(0);
    const [float,setFloat]=useState(true);

    const mask=[style.mask,style.mask1]
    const daypicker=[style.daypicker,style.daypicker1]

    const images=[
        "home-background-1.jpg",
        "home-background-2.jpg"
    ]
    const title=["Denmark","Finland"]
    const buttonClick = () => {
        setFloat(float => !float);
        console.log("hi")
    };
    const handleClick = () => {
        setcontent(content => !content);
    };

    useEffect(()=>{
        let id=setInterval(()=>{
            setCount(count=>count+1)
        },10000)
        return ()=>clearInterval(id)
    },[])

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


    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }
    return(
        <>
                <div className={style.herocontainer}>
                    <img className={style.background} src={images[(count%2)]} alt='alter'/>
                    <h1>Rent You on Sunday</h1>
                    
                    <Login/>
                    <Searchform buttonClick={buttonClick}/>
                    <button className={`${style.button} ${style.scrollindicator}`} onClick={handleClick} >
                        <span className={style.scrollindicatorlabel}>introduction</span> 
                        <div className={style.scrollindicatorline}></div>
                    </button>
                    <div className={mask[float===true?0:1]} onClick={event=>buttonClick()}></div>
                    
                    <Intro title={title[count%2]} content={p[(count%2)]} number={content}/>
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                        footer={footer}
                        className={daypicker[float===true?0:1]}
                    />
                    
            </div>
        </>
    )
}