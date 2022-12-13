import Title from "./hoteltitle"
import Left from "./room"
import Right from "./book"
import Evaluate from "./evaluate"
import Attraction from "./attraction"
import Information from "./information"
import Transportation from "./transportation"
import style from "../../styles/layout/home.module.css"

export default function HotelinfoSection() {
    return (
        <>
            <Title/>
            <div className={style.hotelinfoSectionContainer}>
                
                <div className={style.roominfo}>
                    <div className={style.title}><p>房型</p></div>
                    <div className={style.left}>
                        <Left className={style.left}/>
                        <Left className={style.left}/>
                        <Left className={style.left}/>
                    </div>
                    <Right className={style.right}/> 
                </div>
                <Evaluate/>
                <Attraction/>
                <Information/>
                <Transportation/>
            </div>
        </>
    )
}