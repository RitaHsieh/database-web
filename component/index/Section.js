import Searchform from "./Searchform"
import Login from "./login"
import Intro from "./intro"
import style from "../../styles/layout/home.module.css"

import {useState,useEffect} from "react"
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


export default function Section() {
    // fetch api
    const [city,setCity] = useState();
    const [people,setPeople] = useState('');
    const [startselected, setStartSelected] = useState();
    const [endselected, setEndSelected] = useState();

    const [content,setcontent] = useState(true);
    const [count,setCount]=useState(0);

    //date
    const mask=[style.mask,style.mask1]
    const daypicker=[style.daypicker,style.daypicker1]

    const [startfloat,setStartFloat]=useState(true);
    const [endfloat,setEndFloat]=useState(true);

    const startbuttonClick = () => {
        setStartFloat(startfloat => !startfloat);
        console.log(startselected);
    };

    const endbuttonClick = () => {
        setEndFloat(endfloat => !endfloat);
    };

    let footer = <p>Please pick a day.</p>;
    if (startselected) {
        footer = <p>You picked {format(startselected, 'PP')}.</p>;
        
    }
    if (endselected) {
        footer = <p>You picked {format(endselected, 'PP')}.</p>;
        
    }

    //image
    const images=[
        "home-background-1.jpg",
        "home-background-2.jpg"
    ]
    const title=["Denmark","Finland"]
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
      
    const handleClick = () => {
        setcontent(content => !content);
    };

    useEffect(()=>{
        let id=setInterval(()=>{
            setCount(count=>count+1)
        },10000)
        return ()=>clearInterval(id)
    },[])
    


    return(
        <>
                <div className={style.homeSectionContainer}>
                    <img className={style.background} src={images[(count%2)]} alt='alter'/>
                    <h1 className={style.webname}>Rent You on Sunday</h1>
                    
                    <Login/>
                    <Searchform startbuttonClick={startbuttonClick} endbuttonClick={endbuttonClick} startselected={startselected} endselected={endselected} Setpeople={setPeople} Setcity={setCity}/>
                    <button className={`${style.scrollbutton} ${style.scrollindicator}`} onClick={handleClick} >
                        <span className={style.scrollindicatorlabel}>introduction</span> 
                        <div className={style.scrollindicatorline}></div>
                    </button>
                    <div className={mask[startfloat===true?0:1]} onClick={startbuttonClick}></div>
                    <div className={mask[endfloat===true?0:1]} onClick={endbuttonClick}></div>
                    
                    <Intro title={title[count%2]} content={p[(count%2)]} number={content}/>
                    <DayPicker
                        mode="single"
                        selected={startselected}
                        onSelect={setStartSelected}
                        footer={footer}
                        className={daypicker[startfloat===true?0:1]}
                    />
                    <DayPicker
                        mode="single"
                        selected={endselected}
                        onSelect={setEndSelected}
                        footer={footer}
                        className={daypicker[endfloat===true?0:1]}
                    />
                    <div>{people}</div>
                    <div>{city}</div>
                    
            </div>
        </>
    )
}