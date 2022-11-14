import style from "../styles/search-section.module.css"
import Order from "./order"
import Filter from "./Filter"
import Searchform_2 from "./Searchform-2"
import Search_result from "./search_result"
import Filter_click from "./Fliter_click"

export default function search_section() {
    return (
        <>
            <div>
                <p className={style.text}>AGODA</p>
                <div><Searchform_2  /></div>
                <Filter_click  />
            </div>

            <Order/>
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
            <Filter/>
        </>
    )
}