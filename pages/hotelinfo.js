import Section from "../component/hotelInfo/hotelinfo"
import Evaluate from "../component/hotelInfo/evaluate"
import Attraction from "../component/hotelInfo/attraction"
import Information from "../component/hotelInfo/information"
import Transportation from "../component/hotelInfo/transportation"
export default function Home() {
    return (
        <>
            <Section/>
            <Evaluate/>
            <Attraction/>
            <Information/>
            <Transportation/>
        </>
    )
}