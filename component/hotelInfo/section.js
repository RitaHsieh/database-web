import Title from "./hoteltitle"
import Evaluate from "./hotelinfo_component/evaluate"
import Information from "./hotelinfo_component/information"
import Transportation from "./hotelinfo_component/transportation"
import Roominfo from "./hotelinfo_component/roominfo_component/roominfo"
import Introduction from "./hotelinfo_component/introduction"
import Header from "../multi/header" 
import Searchform_2 from "../search/Searchform-2"

import style from "../../styles/layout/home.module.css"
import Image from "next/image"
import { useState } from "react"
import logo from '../../public/image/logo2.png'

export default function HotelinfoSection() {

    const [float,setFloat] = useState(false);

    const mask=[style.searchMask,style.searchMaskHidden];


    const btnClick = () => {
        setFloat(float => !float);
    };

    return (
        <>
            <Header/>
            <div className={style.hotelinfoSectionContainer}>
                <Searchform_2/>
                <div className={style.main}>
                    <Title/>
                    <Introduction/>
                    <Roominfo/>
                    <Evaluate/>
                    <Information/>
                    <Transportation/>
                </div>
            </div>
        </>
    )
}