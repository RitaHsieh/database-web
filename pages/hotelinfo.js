import Title from "../component/hotelInfo/title"
import Left from "../component/hotelInfo/room"
import Right from "../component/hotelInfo/book"
import Evaluate from "../component/hotelInfo/evaluate"
import Attraction from "../component/hotelInfo/attraction"
import Information from "../component/hotelInfo/information"
import Transportation from "../component/hotelInfo/transportation"
import style from "../styles/layout/home.module.css"

export default function Home() {
    return (
        <>
            <Title/>
            <div className={style.hotelinfoSectionContainer}>
                
                <div className={style.roominfo}>
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