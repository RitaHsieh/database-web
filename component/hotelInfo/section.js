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
                <Introduciton/>
                <Roominfo/>
                <Evaluate/>
                <Attraction/>
                <Information/>
                <Transportation/>
            </div>
        </>
    )
}