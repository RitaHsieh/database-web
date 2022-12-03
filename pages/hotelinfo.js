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
            <div className={style.hotelinfoSectionContainer}>
                <div className={style.roominfo}>
                    <div>
                        <Left/>
                        <Left/>
                        <Left/>
                    </div>
                    <Right/>
                </div>
                <Evaluate/>
                <Attraction/>
                <Information/>
                <Transportation/>
            </div>
        </>
    )
}