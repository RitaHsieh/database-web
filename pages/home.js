import Briefintroduction from "../component/brief-introduction"
import Section from "../component/Section"
import { useRef } from "react"
import PopularHotel from "../component/popularhotel";
import style from  "../styles/Home.module.css"
export default function Home() {
    const ref = useRef(null);
    const scrollview = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
        
    };
    return (
        <>
            <Section event={scrollview}/>
            <div className={style.intro} ref={ref}><PopularHotel/></div>
        </>
    )
}