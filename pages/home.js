import Briefintroduction from "../component/brief-introduction"
import Section from "../component/Section"
import { useRef } from "react"
export default function Home() {
    const ref = useRef(null);
    const scrollview = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
        
    };
    return (
        <>
            <Section event={scrollview}/>
            <div ref={ref}><Briefintroduction 
                                beforeintro="介紹" 
                                name="飯店名稱" 
                                intro="介紹" 
                                addr="地址" 
                                price="價格"/>
            </div>
        </>
    )
}