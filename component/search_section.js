import style from "../styles/search-section.module.css"
import Order from "./order"
import Filter from "./Filter"
import Searchform_2 from "./Searchform-2"
import Search_result from "./search_result"

export default function search_section() {
    return (
        <>
            <div className={style.topcontainer}>
                <p className={style.text}>Rent You on Sunday</p>
                <Order/>
            </div>
            <div className={style.bottomcontainer}>
                <div className={style.bottomleftcontainer}><Searchform_2/></div>
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

            
            <Filter/>
        </>
    )
}