import style from "../../styles/layout/home.module.css"
import Order from "./order"
import Filter from "./Filter"
import Searchform_2 from "./Searchform-2"
import Search_result from "./search_result"
import { useState } from "react"

export default function search_section() {

    const [float,setFloat] = useState(false);

    const mask=[style.searchMask,style.searchMaskHidden];


    const btnClick = () => {
        setFloat(float => !float);
    };

    return (
        <>
            <div className={style.searchTopContainer}>
                <p className={style.text}>Rent You on Sunday</p>
                <Order/>
            </div>
            <div className={style.searchBottomContainer}>
                <div className={style.bottomleftcontainer}>
                    <Searchform_2/>
                    <button className={style.btnfilter} onClick={btnClick}>篩選</button>
                </div>
                <div className={style.hoteldata}>
                    <Search_result/>
                    <Search_result/>
                    <Search_result/>
                    <Search_result/>
                    <Search_result/>
                </div>
            </div>
            <div className={float===true?mask[0]:mask[1]} onClick={event=>btnClick()}></div>
            <Filter float={float===true?0:1}/>

        </>
    )
}