import style from "../styles/search-section.module.css"
import Order from "./order"
import Filter from "./Filter"
import Searchform_2 from "./Searchform-2"
import Search_result from "./search_result"
import { useState } from "react"

export default function search_section() {

    const [float,setFloat] = useState(true);

    const handleClick=()=>{
       setFloat(float=!float);
    }

    return (
        <>
            <div className={style.topcontainer}>
                <p className={style.text}>Rent You on Sunday</p>
                <Order/>
            </div>
            <div className={style.bottomcontainer}>
                <div className={style.bottomleftcontainer}>
                    <Searchform_2/>
                    <button className={style.btnfilter} onClick={handleClick}>篩選</button>
                </div>
                <div className={style.hoteldata}>
                    <div className={style.block}>
                        <Search_result/>
                    </div>
                    <div className={style.block}>
                        <Search_result/>
                    </div>
                    <div className={style.block}>
                        <Search_result/>
                    </div>
                    <div className={style.block}>
                        <Search_result/>
                    </div>
                    <div className={style.block}>
                        <Search_result/>
                    </div>
                </div>
            </div>
            <div className={float==true?style.mask:style.maskhidden}></div>
            <Filter float={float===true?0:1}/>

        </>
    )
}