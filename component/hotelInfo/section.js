import Title from "./hoteltitle"
import Evaluate from "./hotelinfo_component/evaluate"
import Attraction from "./hotelinfo_component/attraction"
import Information from "./hotelinfo_component/information"
import Transportation from "./hotelinfo_component/transportation"
import Roominfo from "./hotelinfo_component/roominfo_component/roominfo"
import Introduction from "./hotelinfo_component/introduction"
import style from "../../styles/layout/home.module.css"

export default function HotelinfoSection() {
    return (
        <>
            <Title/>
            <div className={style.hotelinfoSectionContainer}>
                <Introduction/>
                <Roominfo/>
                <Evaluate/>
                <Attraction/>
                <Information/>
                <Transportation/>
            </div>
        </>
    )
}